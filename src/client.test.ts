import { describe, expect, test } from "bun:test";
import { HikerApiClient } from "./client";
import { HikerApiError } from "./errors";
import type { HikerApiFetch } from "./http";

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function mockFetch(handler: () => Response) {
  const requests: Request[] = [];
  const fetch: HikerApiFetch = async (request) => {
    requests.push(request.clone());
    return handler();
  };
  return { fetch, requests };
}

describe("HikerApiClient", () => {
  test("sends the access key in a header and the query to the endpoint's path", async () => {
    const mock = mockFetch(() =>
      json({ user: { username: "instagram" }, status: "ok" }),
    );
    const hikerapi = new HikerApiClient({
      accessKey: "key-123",
      fetch: mock.fetch,
    });

    await hikerapi.user.byUsernameV2({ username: "instagram", safe_int: true });
    // @ts-expect-error The username is required.
    await hikerapi.user.byUsernameV2({});

    const url = new URL(mock.requests[0].url);
    expect(mock.requests[0].method).toBe("GET");
    expect(mock.requests[0].headers.get("x-access-key")).toBe("key-123");
    expect(url.origin + url.pathname).toBe(
      "https://api.hikerapi.com/v2/user/by/username",
    );
    expect(Object.fromEntries(url.searchParams)).toEqual({
      username: "instagram",
      safe_int: "true",
    });
  });

  test("types the answer from the spec", async () => {
    const mock = mockFetch(() =>
      json({ requests: 129627, rate: 11, currency: "USD", amount: 25.5 }),
    );
    const hikerapi = new HikerApiClient({
      accessKey: "key-123",
      fetch: mock.fetch,
    });

    const balance = await hikerapi.sys.balance();

    const requestsLeft: number = balance.requests;
    expect(requestsLeft).toBe(129627);
    expect(new URL(mock.requests[0].url).search).toBe("");
  });

  test("keeps a [items, cursor] answer as a tuple", async () => {
    const mock = mockFetch(() =>
      json([[{ pk: "1", username: "a", full_name: null }], "cursor-2"]),
    );
    const hikerapi = new HikerApiClient({
      accessKey: "key-123",
      fetch: mock.fetch,
    });

    const [users, nextCursor] = await hikerapi.user.followersChunkGql({
      user_id: "1",
    });

    // These lines only compile when the answer is a tuple, not an array of either type.
    const cursor: string | null = nextCursor;
    expect(users).toHaveLength(1);
    expect(cursor).toBe("cursor-2");
  });

  test("sends a list as one parameter per item", async () => {
    const mock = mockFetch(() => json({}));
    const hikerapi = new HikerApiClient({
      accessKey: "key-123",
      fetch: mock.fetch,
    });

    await hikerapi.media.commentsInfosV2({ media_ids: ["1", "2"] });

    const url = new URL(mock.requests[0].url);
    expect(url.searchParams.getAll("media_ids")).toEqual(["1", "2"]);
  });

  test("names the field when HikerAPI rejects a request (422)", async () => {
    const body = {
      detail: [
        { loc: ["query", "username"], msg: "Field required", type: "missing" },
      ],
    };
    const mock = mockFetch(() => json(body, 422));
    const hikerapi = new HikerApiClient({
      accessKey: "key-123",
      fetch: mock.fetch,
    });

    const error = await hikerapi.user
      .byUsernameV2({ username: "" })
      .catch((caught) => caught);

    expect(error).toBeInstanceOf(HikerApiError);
    expect(error.status).toBe(422);
    expect(error.message).toBe("query.username: Field required");
  });

  test("throws HikerApiError on a 404 with no body", async () => {
    const mock = mockFetch(() => new Response(null, { status: 404 }));
    const hikerapi = new HikerApiClient({
      accessKey: "key-123",
      fetch: mock.fetch,
    });

    const error = await hikerapi.user
      .byIdV2({ id: "1" })
      .catch((caught) => caught);

    expect(error).toBeInstanceOf(HikerApiError);
    expect(error.status).toBe(404);
    expect(error.message).toBe("HikerAPI request failed (HTTP 404).");
  });
});
