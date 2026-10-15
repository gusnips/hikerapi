import { HikerApiError } from "./errors";
import type { paths } from "./schema";

const DEFAULT_BASE_URL = "https://api.hikerapi.com";

export type HikerApiFetch = (request: Request) => Promise<Response>;

export interface HikerApiConfig {
  /** Your access key from https://hikerapi.com/tokens. */
  accessKey: string;
  /** `https://api.hikerapi.com` by default. `https://api.instagrapi.com` skips Cloudflare. */
  baseUrl?: string;
  fetch?: HikerApiFetch;
}

/** Pass `AbortSignal.timeout(30_000)` to stop waiting after 30 seconds. */
export interface CallOptions {
  signal?: AbortSignal;
}

/** The query string of one endpoint. */
export type Query<P extends keyof paths> =
  paths[P]["get"]["parameters"]["query"];

/** What one endpoint answers when the call works, as HikerAPI's OpenAPI file describes it. */
export type Data<P extends keyof paths> =
  paths[P]["get"]["responses"][200]["content"]["application/json"];

function readBody(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

// A list is sent as one parameter per item: media_ids=1&media_ids=2. A missing value is left out.
function appendQuery(
  params: URLSearchParams,
  query: Record<string, unknown> | undefined,
): void {
  for (const [key, value] of Object.entries(query ?? {})) {
    for (const item of Array.isArray(value) ? value : [value]) {
      if (item !== undefined && item !== null) params.append(key, String(item));
    }
  }
}

// ponytail: HikerAPI is the one API here with typed answers, and openapi-fetch turns a tuple
// like [items, cursor] into an array. This sends the call itself and trusts the OpenAPI file for
// the answer's type, as openapi-fetch does. It does not check the shape at run time. Upgrade
// path: validate with a schema library if answers drift from the file.
export class Transport {
  constructor(private readonly config: HikerApiConfig) {}

  async get<P extends keyof paths>(
    path: P,
    query?: Query<P>,
    options?: CallOptions,
  ): Promise<Data<P>> {
    const base = (this.config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    const url = new URL(`${base}${path}`);
    appendQuery(url.searchParams, query);
    const request = new Request(url, {
      headers: {
        Accept: "application/json",
        "x-access-key": this.config.accessKey,
      },
      signal: options?.signal,
    });
    const response = await (this.config.fetch ?? fetch)(request);
    const text = await response.text();
    if (!response.ok) throw new HikerApiError(response.status, readBody(text));
    try {
      return JSON.parse(text);
    } catch {
      throw new HikerApiError(response.status, text);
    }
  }
}
