# @gusnips/hikerapi

TypeScript client for the [HikerAPI](https://hikerapi.com) Instagram data API: profiles, posts, reels, stories, highlights, comments, followers, hashtags, locations and search. Unofficial, not made by HikerAPI.

```bash
npm install @gusnips/hikerapi
# or
bun add @gusnips/hikerapi
```

The `hikerapi` name on npm is a different package, by someone else. This one is only published as `@gusnips/hikerapi`.

## First call

```ts
import { HikerApiClient } from "@gusnips/hikerapi";

const hikerapi = new HikerApiClient("YOUR_ACCESS_KEY");

const profile = await hikerapi.user.byUsernameV1({ username: "instagram" });

console.log(profile.pk, profile.username);
```

Get an access key at [hikerapi.com/tokens](https://hikerapi.com/tokens). Keep it on your server and out of the browser.

The client sends the key for you, in the `x-access-key` header. You never pass it to a method.

## Finding the method you need

Each endpoint is one method. The group is the first word of the path, and the method is the rest of it in camelCase, then the prefix HikerAPI puts at the front (`v1`, `v2`, `v3`, `gql`, `g1`, `g2` or `a2`):

| HikerAPI endpoint            | In the SDK                       |
| ---------------------------- | -------------------------------- |
| `GET /v2/user/by/username`   | `hikerapi.user.byUsernameV2()`   |
| `GET /v1/user/by/username`   | `hikerapi.user.byUsernameV1()`   |
| `GET /gql/user/medias`       | `hikerapi.user.mediasGql()`      |
| `GET /v2/media/info/by/code` | `hikerapi.media.infoByCodeV2()`  |
| `GET /v2/hashtag/medias/top` | `hikerapi.hashtag.mediasTopV2()` |
| `GET /sys/balance`           | `hikerapi.sys.balance()`         |

HikerAPI has the same call under several prefixes, so the prefix always stays in the name. A path with nothing left after the prefix is called `get`: `GET /a2/user` is `hikerapi.user.getA2()`.

Groups, from the API file version 1.8.2: `user` (61 methods), `media` (32), `hashtag` (12), `fbsearch` (11), `search` (9), `location` (8), `story` (7), `highlight` (4), `comments` (4), `shop` (3), `share` (3), `track` (3), `userstream` (2), `comment` (2), `sys` (1) and `topsearch` (1).

Hover a method in your editor to read what it does. The parameters are typed from HikerAPI's OpenAPI file, so your editor lists them and marks the required ones.

47 endpoints are marked legacy by HikerAPI. They are in the SDK, marked `@deprecated`, so your editor strikes them through. The `comments` group is all legacy.

## What you get back

Each method returns what HikerAPI's OpenAPI file says it returns. For 93 of the 163 methods the file names the type, like `User`, `Media` or `Story`, and the SDK types its fields:

```ts
const balance = await hikerapi.sys.balance();

console.log(balance.requests, balance.rate);
```

The others return a plain object, a list of plain objects, a string or `unknown`, because HikerAPI describes them as free-form. Check the shape before you read them.

## Cost

HikerAPI bills in requests. Some endpoints cost more than one, and the method's doc says so, for example `user.highlightsV1` ("Billing: 2 requests per call").

`sys.balance()` is free. It tells you how many requests are left (`requests`), and how many you may send per second (`rate`).

## More pages

Some endpoints answer one page at a time, with a `next_page_id`. Send it back as `page_id`. It is `null` when there are no more pages, so the loop below stops:

```ts
let pageId: string | undefined;
do {
  const page = await hikerapi.user.followersG2({
    user_id: "25025320",
    page_id: pageId,
  });
  console.log(page.response);
  pageId = page.next_page_id ?? undefined;
} while (pageId);
```

The `chunk` endpoints answer a list and a cursor together, as a pair. The name of the parameter that takes the cursor depends on the endpoint (`end_cursor`, `max_id`), so read it in the method's types:

```ts
const [users, cursor] = await hikerapi.user.followersChunkGql({
  user_id: "25025320",
});
const [more] = await hikerapi.user.followersChunkGql({
  user_id: "25025320",
  end_cursor: cursor,
});
```

## Errors

A failed call throws `HikerApiError`. It has the HTTP `status`, the raw `body`, and a `message`:

```ts
import { HikerApiError } from "@gusnips/hikerapi";

try {
  await hikerapi.user.byIdV2({ id: "0" });
} catch (error) {
  if (error instanceof HikerApiError && error.status === 404) {
    // HikerAPI did not find it.
  }
  throw error;
}
```

HikerAPI's file lists two errors for its endpoints:

| Status | Meaning                                                                     |
| ------ | --------------------------------------------------------------------------- |
| 404    | Not found. The file gives it no body, so the message only names the status. |
| 422    | A parameter is missing or wrong. The message names the field.               |

HikerAPI also answers with other statuses, such as 429. Its docs say it does not bill calls that end in 429, a 5xx or "service unavailable". Read `error.status` and `error.body` for any status.

Network failures, like a lost connection, throw the error `fetch` gives you.

## Timeouts and retries

A call waits as long as `fetch` waits. To stop after 30 seconds, pass a signal as the last argument:

```ts
await hikerapi.user.byUsernameV2(
  { username: "instagram" },
  { signal: AbortSignal.timeout(30_000) },
);
```

The client never retries, so a retry never bills you twice without you choosing it.

## Options

```ts
new HikerApiClient({
  accessKey: "YOUR_ACCESS_KEY",
  baseUrl: "https://api.hikerapi.com", // the default
  fetch: myFetch, // takes a Request, returns a Response
});
```

HikerAPI lists a second address, `https://api.instagrapi.com`, "without Cloudflare". Set it as `baseUrl` to use it.

The client has no runtime dependencies.

## Keeping it current

The methods and types are written by a script from `openapi.json`. To update after HikerAPI changes its API, download the new file from `https://api.hikerapi.com/openapi.json`, replace it, and run:

```bash
bun run generate
```

The script stops with an error if two paths end up with one name. Do not edit `src/schema.d.ts`, `src/client.ts` or `src/modules/`. The script rewrites them.

## License

MIT. Not affiliated with HikerAPI.
