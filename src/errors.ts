export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// A bad request (422) answers { detail: [{ loc, msg }] }, one item per field. Other errors can
// carry a { detail } string, or a plain text body.
function detailText(body: unknown): string | undefined {
  if (typeof body === "string") return body || undefined;
  if (!isRecord(body)) return undefined;
  const { detail } = body;
  if (typeof detail === "string") return detail;
  if (!Array.isArray(detail)) return undefined;
  const fields = detail.filter(isRecord).map((item) => {
    const where = Array.isArray(item.loc) ? item.loc.join(".") : "request";
    return `${where}: ${String(item.msg)}`;
  });
  return fields.join("; ") || undefined;
}

export class HikerApiError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(status: number, body: unknown) {
    super(detailText(body) ?? `HikerAPI request failed (HTTP ${status}).`);
    this.name = "HikerApiError";
    this.status = status;
    this.body = body;
  }
}
