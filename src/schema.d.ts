export interface paths {
  "/v2/fbsearch/topsearch": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Fbsearch Top
     * @description Search top content by keyword
     */
    get: operations["fbsearch_top_v2_fbsearch_topsearch_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get media comments (one request return 15 comments)
     * @description Get comments on a media
     */
    get: operations["media_comments_v2_media_comments_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/by/username": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get user object by username (one request required). If speed is crucial, it's more efficient to use the by/id endpoint for quicker responses.
     * @description Get user object by username
     */
    get: operations["user_by_username_v2_user_by_username_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/medias": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Returns the user medias
     * @description Get user medias
     */
    get: operations["user_medias_gql_user_medias_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/stories": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Stories
     * @description Billing: 2 requests per call.
     */
    get: operations["user_stories_v2_user_stories_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User By Id
     * @description Get user object by id
     */
    get: operations["user_by_id_v2_user_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/by/username": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get user object by username (one request required). If speed is crucial, it's more efficient to use the by/id endpoint for quicker responses.
     * @description Get user object by username
     */
    get: operations["user_by_username_v1_user_by_username_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User By Id
     * @description Get user object by id
     */
    get: operations["user_by_id_v1_user_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/about": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * We recommend switching to /gql/user/about
     * @description Get the "About this account" panel for a user: verified status,
     *     country of registration, date the account was created, and the list
     *     of former usernames.
     */
    get: operations["user_about_v1_user_about_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/following": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user following (one request required). Prefer /g2/user/following
     * @description Get part (one page) of following users
     */
    get: operations["user_following_v2_user_following_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/following/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user following (one request required)
     * @description Billing: 2 requests per call.
     */
    get: operations["user_following_chunk_gql_user_following_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/followers/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user followers (one request required)
     * @description Billing: 2 requests per call.
     */
    get: operations["user_followers_chunk_gql_user_followers_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/clips": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Clips
     * @description Get user clips.
     */
    get: operations["user_clips_v2_user_clips_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/reposts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get user's reposted content
     * @description Get user media reposts
     */
    get: operations["fetch_user_reposts_query_gql_user_reposts_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/stories/by/username": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * If speed is crucial, it's more efficient to use the by/id endpoint for quicker responses.
     * @description Billing: 3 requests per call.
     */
    get: operations["user_stories_by_username_v2_user_stories_by_username_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/tag/medias": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get medias where user is tagged
     * @description Get usertag medias
     */
    get: operations["usertag_medias_v2_user_tag_medias_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/stories": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Stories
     * @description Billing: 2 requests per call.
     */
    get: operations["user_stories_v1_user_stories_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/a2/user": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User
     * @description Get user object
     */
    get: operations["user_a2_user_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/highlights": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Highlights
     * @description Billing: 2 requests per call.
     */
    get: operations["user_highlights_v2_user_highlights_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/highlights/by/username": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * If speed is crucial, it's more efficient to use the by/id endpoint for quicker responses.
     * @description Billing: 3 requests per call.
     */
    get: operations["user_highlights_by_username_v2_user_highlights_by_username_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/clips/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Clips Chunk
     * @description Get part of user clips with cursor
     *
     *     The response includes trial publications
     *     https://help.instagram.com/1013292530224018
     *
     *     Trial publications have no "reshare_count" field if you need to filter them
     */
    get: operations["user_clips_chunk_v1_user_clips_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/clips": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Returns the user's short video posts (reels).
     * @description Get user clips
     */
    get: operations["user_clips_gql_user_clips_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get user object by URL (one request required)
     * @description Get user object by URL
     */
    get: operations["user_by_url_v1_user_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/userstream/by/username": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * If speed is crucial, it's more efficient to use the by/id endpoint for quicker responses.
     * @description Get userstream (info) by username
     */
    get: operations["userstream_by_username_v2_userstream_by_username_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/userstream/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * If speed is crucial, it's more efficient to use the by/id endpoint for quicker responses.
     * @description Get userstream (info) by id
     */
    get: operations["userstream_by_id_v2_userstream_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/search/following": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Following
     * @description Search users by following users
     */
    get: operations["search_following_v1_user_search_following_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/search/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Followers
     * @description Search users by followers
     */
    get: operations["search_followers_v1_user_search_followers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/following/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user following (one request required)
     * @description Get part (one page) of following users with cursor
     */
    get: operations["user_following_chunk_v1_user_following_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/followers/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user followers (one request required)
     * @description Get part (one page) of followers users with cursor
     */
    get: operations["user_followers_chunk_v1_user_followers_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/g2/user/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user followers (one request required)
     * @description Get part (one page) of followers users with cursor
     */
    get: operations["user_followers_g2_user_followers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/g2/user/following": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user following (one request required)
     * @description Get part (one page) of following users with cursor
     */
    get: operations["user_following_g2_user_following_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/suggested/profiles": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Fetch Suggestion Details
     * @description Fetch suggested users details by target_id.
     *
     *     expand_suggestion=True for more detailed response
     */
    get: operations["fetch_suggestion_details_v2_user_suggested_profiles_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/explore/businesses/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get recommended accounts for category by user id
     * @description Get list of recommended accounts for business category of the user by his id
     */
    get: operations["explore_businesses_by_id_v2_user_explore_businesses_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/about": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User About
     * @description Get the "About this account" panel for a user: verified status,
     *     country of registration, date the account was created, and the list
     *     of former usernames.
     */
    get: operations["user_about_gql_user_about_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/g2/user/clips": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user's reels through web GraphQL
     * @description Web alternative to /gql/user/clips with its own raw envelope and cursor.
     *
     *     Pass next_page_id as page_id. Serving-viewer data is omitted.
     *     Media items are reduced web profile cards (about 30-40 fields instead of
     *     ~180 in the mobile route); video_versions and other video data may be
     *     missing. Not a drop-in replacement: JSON layout and cursor differ.
     */
    get: operations["user_clips_g2_user_clips_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/g2/user/medias": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user profile media (one page)
     * @description Get part (one page) of user medias.
     */
    get: operations["user_medias_g2_user_medias_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/g2/user/reposts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user's reposts through web GraphQL
     * @description Web alternative to /gql/user/reposts with its own raw envelope and cursor.
     *
     *     Pass next_page_id as page_id. Serving-viewer data is omitted.
     *     Media items are reduced web profile cards (about 30-40 fields instead of
     *     ~180 in the mobile route); video_versions and other video data may be
     *     missing. Not a drop-in replacement: JSON layout and cursor differ.
     */
    get: operations["user_reposts_g2_user_reposts_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/highlights": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user's web highlights GraphQL response
     * @description Return the paginated web GraphQL envelope inside ``response``.
     *
     *     Serving-viewer fields are omitted. Private and missing users use the API's
     *     standard error responses.
     */
    get: operations["user_highlights_gql_user_highlights_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/stories": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a user's web stories GraphQL response
     * @description Return the upstream web GraphQL envelope without serving-viewer fields.
     *
     *     Private and missing users use the API's standard error responses.
     */
    get: operations["user_stories_gql_user_stories_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/web_profile_info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get user profile info GraphQL
     * @description Get user profile info by user id (GraphQL web_profile_info)
     */
    get: operations["user_web_profile_info_gql_user_web_profile_info_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/highlights": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Highlights
     * @description Billing: 2 requests per call.
     */
    get: operations["user_highlights_v1_user_highlights_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/highlights/by/username": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * If speed is crucial, it's more efficient to use the by/id endpoint for quicker responses.
     * @description Billing: 3 requests per call.
     */
    get: operations["user_highlights_by_username_v1_user_highlights_by_username_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/medias/pinned": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get pinned medias
     * @description Get user medias
     */
    get: operations["user_pinned_medias_v1_user_medias_pinned_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/stories/by/username": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * If speed is crucial, it's more efficient to use the by/id endpoint for quicker responses.
     * @description Get user stories
     */
    get: operations["user_stories_by_username_v1_user_stories_by_username_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/tag/medias/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Usertag Medias Chunk
     * @description Get usertag medias
     */
    get: operations["usertag_medias_chunk_v1_user_tag_medias_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/info/by/code": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Returns 200 for found posts and 404 for unavailable or deleted posts. Other responses are not provided. Doesn't return usertags for video. Note: promoted/ad posts (product_type=ad) may return 404, use /v1/media/by/code instead for those.
     * @description Get media object
     */
    get: operations["media_info_by_code_v2_media_info_by_code_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/comments/replies": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media Comments Replies
     * @description Get media comment replies with pagination by min_id
     */
    get: operations["media_comments_replies_v2_media_comments_replies_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/likers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media Likers
     * @description Get user's likers
     */
    get: operations["media_likers_v2_media_likers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Attention! Use with (https://ins...ram.com/p/CA2aJYrg6cZ/)
     * @description Get media object
     */
    get: operations["media_by_url_v1_media_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/comments/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get media comments (one request return 15 comments)
     * @description Get comments on a media.
     *
     *     For new paginated comment integrations, prefer `/v2/media/comments`.
     *     Read comments from `response.comments`, then pass the returned
     *     `next_page_id` as `page_id` in the next request.
     *
     *     Migration requires adapting the response format: this v1 endpoint returns
     *     `[comments, next_min_id, next_max_id]`, while v2 returns an object with
     *     `response` and `next_page_id`. Start a new pagination chain on v2; do not
     *     reuse a v1 cursor. This v1 endpoint remains available.
     */
    get: operations["media_comments_chunk_v1_media_comments_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/info/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Returns 200 for found posts, 404 for unavailable or deleted posts and 400 for malformed URLs (story/share/audio links, numeric IDs, template placeholders) with a hint to the right endpoint. Doesn't return usertags for video. Attention! Use with https://ins...ram.com/p/CA2aJYrg6cZ/. Note: promoted/ad posts (product_type=ad) may return 404, use /v1/media/by/url instead for those.
     * @description Get media object
     */
    get: operations["media_info_by_url_v2_media_info_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/by/code": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media By Code
     * @description Get media object
     */
    get: operations["media_by_code_v1_media_by_code_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/info/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Returns 200 for found posts and 404 for unavailable or deleted posts. Other responses are not provided. Doesn't return usertags for video. Note: promoted/ad posts (product_type=ad) may return 404, use /v1/media/by/id instead for those.
     * @description Get media object
     */
    get: operations["media_info_by_id_v2_media_info_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/likers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media Likers
     * @description Get user's likers
     */
    get: operations["media_likers_v1_media_likers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/insight": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Insights Media
     * @description Get media insight
     */
    get: operations["insights_media_v1_media_insight_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/comment/offensive": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media Check Offensive Comment
     * @description Whether to receive an offensive comment
     */
    get: operations["media_check_offensive_comment_v2_media_comment_offensive_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/oembed": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media Oembed
     * @description Return info about media and user from post URL
     */
    get: operations["media_oembed_v1_media_oembed_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/media/usertags": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Returns users tagged in the video. You can pass up to 10 media ids
     * @description Returns users tagged in the video. You can pass up to 10 media ids
     */
    get: operations["graphql_query_getfulldatacomputingmediadictquery_chapi_gql_media_usertags_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/media/likers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media Likers
     * @description Get likers on a media (paging is unavailable on this endpoint)
     */
    get: operations["media_likers_gql_media_likers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/template": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media Template
     * @description Get media template
     */
    get: operations["media_template_v2_media_template_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/media/clips_metadata": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Returns clips metadata for the given medias: original sound info (audio_asset_id, duration_in_ms, ig_artist, consumption_info), music_info and content appreciation (gifts) state. Batch endpoint, you can pass up to 10 media ids
     * @description Returns clips metadata (audio/music/appreciation) for up to 10 medias
     */
    get: operations["graphql_query_getfulldatacontentappreciationquery_chapi_gql_media_clips_metadata_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media By Id
     * @description Get media object
     */
    get: operations["media_by_id_v1_media_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/code/from/pk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media Code From Pk
     * @description Get media code from pk
     */
    get: operations["media_code_from_pk_v1_media_code_from_pk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/pk/from/code": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media Pk From Code
     * @description Get media pk from code
     */
    get: operations["media_pk_from_code_v1_media_pk_from_code_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/pk/from/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Attention! Use with (https://ins...ram.com/p/CA2aJYrg6cZ/)
     * @description Get Media pk from URL
     */
    get: operations["media_pk_from_url_v1_media_pk_from_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/user": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media User
     * @description Get author of the media
     */
    get: operations["media_user_v1_media_user_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/comments/infos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Returns comment metadata for several medias in one request: comment_count, has_more_comments, comment_threading_enabled, comment_likes_enabled and preview_comments. Use this instead of /v2/media/comments when you only need counts. Batch endpoint, you can pass up to 10 media ids
     * @description Get comment counts and preview comments for up to 10 medias
     */
    get: operations["media_comment_infos_v2_media_comments_infos_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v3/media/likers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Media Likers
     * @description Get a post's likers (ranked, capped ~200)
     */
    get: operations["media_likers_v3_media_likers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/comment/likers/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Comment Likers Chunk
     * @description Get likers on a comment
     */
    get: operations["comment_likers_chunk_gql_comment_likers_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v3/fbsearch/accounts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Fbsearch Accounts
     * @description Search accounts
     */
    get: operations["fbsearch_accounts_v3_fbsearch_accounts_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/search/hashtags": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Hashtags
     * @description Search hashtags
     */
    get: operations["search_hashtags_v1_search_hashtags_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/search/users": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * It is recommended to use /v2/search/accounts as this endpoint will soon be deprecated.
     * @description Search users
     */
    get: operations["search_users_v1_search_users_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/fbsearch/reels": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Fbsearch Reels
     * @description Search top content by keyword
     */
    get: operations["fbsearch_reels_v2_fbsearch_reels_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/fbsearch/accounts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Fbsearch Accounts
     * @description Search accounts
     */
    get: operations["fbsearch_accounts_v2_fbsearch_accounts_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/search/music": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Music
     * @description Search music
     */
    get: operations["search_music_v2_search_music_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/search/hashtags": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Hashtags
     * @description Search hashtags
     */
    get: operations["search_hashtags_v2_search_hashtags_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/topsearch": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Topsearch
     * @description Search top content by keyword.
     *
     *     Returns top accounts AND top media interleaved in one stream,
     *     discriminate by `__typename` (`XDTUserDict` / `XDTMediaDict`).
     *
     *     `flat=true` returns flat `items[]` instead of `stream_rows`.
     */
    get: operations["topsearch_gql_topsearch_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v3/fbsearch/places": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Fbsearch Places
     * @description Search places
     */
    get: operations["fbsearch_places_v3_fbsearch_places_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/fbsearch/places": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Fbsearch Places
     * @description Search locations
     */
    get: operations["fbsearch_places_v1_fbsearch_places_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/search/music": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Music
     * @description Search music
     */
    get: operations["search_music_v1_search_music_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/fbsearch/topsearch/hashtags": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Web Search Topsearch Hashtags
     * @description Search hashtags via topsearch
     */
    get: operations["web_search_topsearch_hashtags_v1_fbsearch_topsearch_hashtags_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/fbsearch/places": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Fbsearch Places
     * @description Search places
     */
    get: operations["fbsearch_places_v2_fbsearch_places_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/hashtag/medias/top": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag Medias Top Chunk
     * @description Get hashtag chunk of top medias
     */
    get: operations["hashtag_medias_top_chunk_v2_hashtag_medias_top_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/hashtag/medias/recent": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag Medias Recent Chunk
     * @description Get hashtag chunk of recent medias
     */
    get: operations["hashtag_medias_recent_chunk_v2_hashtag_medias_recent_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/hashtag/medias/top/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag Medias Top Chunk
     * @description Get hashtag chunk of top medias
     */
    get: operations["hashtag_medias_top_chunk_v1_hashtag_medias_top_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/hashtag/by/name": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag By Name
     * @description Get hashtag object by name
     */
    get: operations["hashtag_by_name_v1_hashtag_by_name_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/hashtag/by/name": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag By Name
     * @description Get hashtag object by name
     */
    get: operations["hashtag_by_name_v2_hashtag_by_name_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/hashtag/medias/clips/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag Medias Clips Chunk
     * @description Get hashtag chunk of clips (reels)
     */
    get: operations["hashtag_medias_clips_chunk_v1_hashtag_medias_clips_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/track/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Track By Id
     * @description Get music track object by id
     */
    get: operations["track_by_id_v2_track_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/track/stream/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Track Stream By Id
     * @description Get music track object by id
     */
    get: operations["track_stream_by_id_v2_track_stream_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/track/by/canonical/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Track By Canonical Id
     * @description Get music track object by canonical_id
     */
    get: operations["track_by_canonical_id_v2_track_by_canonical_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/g2/location/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get location details by id (name, lat/lng, category, description)
     * @description Location details via mobile GraphQL, replaces /v1/location/by/id,
     *     where Instagram stopped returning lat/lng
     */
    get: operations["location_by_id_g2_location_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/location/medias/recent/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Location Medias Recent Chunk
     * @description Get location chunk of recent medias
     */
    get: operations["location_medias_recent_chunk_v1_location_medias_recent_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/location/medias/recent": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Location Medias Recent V1
     * @description Get location recent medias
     */
    get: operations["location_medias_recent_v1_v1_location_medias_recent_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/location/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Location Search
     * @description Get locations using lat and long
     */
    get: operations["location_search_v1_location_search_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/location/medias/top": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Location Medias Top V1
     * @description Get location top medias
     */
    get: operations["location_medias_top_v1_v1_location_medias_top_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/location/medias/top/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Location Medias Top Chunk
     * @description Get location chunk of top medias
     */
    get: operations["location_medias_top_chunk_v1_location_medias_top_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/location/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get location object by id (legacy: lat/lng are no longer returned, prefer /g2/location/by/id)
     * @description Legacy endpoint: Instagram no longer returns lat/lng here (always null).
     *     For coordinates, category and description use /g2/location/by/id
     */
    get: operations["location_by_id_v1_location_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/location/guides": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Location Guides V1
     * @description Get location guides
     */
    get: operations["location_guides_v1_v1_location_guides_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/story/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Attention! To work with /s/ links, call /v1/share/by/url first
     * @description Get story object by id
     */
    get: operations["story_by_url_v2_story_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/story/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Attention! To work with /s/ links, call /v1/share/by/url first
     * @description Get story object by id
     */
    get: operations["story_by_url_v1_story_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/story/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Story By Id
     * @description Get story object by id
     */
    get: operations["story_by_id_v1_story_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/story/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Story By Id
     * @description Get story object by id
     */
    get: operations["story_by_id_v2_story_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/story/download": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Story Download
     * @description Download story media by story id
     */
    get: operations["story_download_v1_story_download_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/story/download/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Download story file by URL to file
     * @description Download story file by URL to file
     *     (you can take it from "/v1/story/by/id" or "/v1/story/by/url")
     *
     *     Example: https://scontent-lga3-1.cdnins...ram.com/v/t66.30100-16/
     *         310890533_1622838408176007_5601749632271872566_n.mp4?efg=...
     */
    get: operations["story_download_by_url_v1_story_download_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/story/download/by/story/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Download story file by story URL
     * @description Download story file by story URL
     *
     *     Example: https://ins...ram.com/stories/example/30038568123745341231284
     */
    get: operations["story_download_by_story_url_v1_story_download_by_story_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/highlight/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Highlight By Id
     * @description Get highlight object by id
     */
    get: operations["highlight_by_id_v2_highlight_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/highlight/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Attention! To work with /s/ links, call /v1/share/by/url first
     * @description Get highlight object by id
     */
    get: operations["highlight_by_url_v1_highlight_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/highlight/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a web highlight GraphQL response by id
     * @description Return the upstream web GraphQL envelope without serving-viewer fields.
     *
     *     Private and missing highlights use the API's standard error responses.
     */
    get: operations["highlight_by_id_gql_highlight_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/shop/about": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Shop About
     * @description Get "About this shop": seller name, address, contacts, privacy policy
     *
     *     `user_id` is the pk of the account that owns the shop; a merchant id
     *     (`17841...`) is accepted too.
     */
    get: operations["shop_about_v1_shop_about_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/shop/products/by_collection/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Shop Products By Collection Chunk
     * @description Get a chunk of products of a shop collection
     *
     *     `encoded_collection_id` comes from `collections[]` of
     *     `/v1/shop/storefront`. The Instagram pagination payload is ~10 KB, too
     *     long for a query string, so it is kept server-side and the client gets an
     *     opaque 64-char `cursor` that lives 24 hours.
     */
    get: operations["shop_products_by_collection_chunk_v1_shop_products_by_collection_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/shop/storefront": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Shop Storefront
     * @description Get shop storefront: merchant ids, collections and first-screen products
     *
     *     A shop exists when `/v2/user/by/username` returns
     *     `seller_shoppable_feed_type == "mini_shop_wave_2"`; an account without a
     *     shop answers 404 `ShopNotFound`. Use `encoded_collection_id` from
     *     `collections[]` to page through products. A storefront made of curated
     *     collections only can return an empty `products[]`, that is not an error.
     */
    get: operations["shop_storefront_v1_shop_storefront_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/share/reel/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Works for reel (clips) only */
    get: operations["share_reel_by_url_v1_share_reel_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/share/by/code": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Works for stories and highlights only or use (/v1/media/by/url, /v1/story/by/url)
     * @description Get share object by code (aGlnaGxpZ2h0OjE4MTQ2MjE2Njk4MDIyMTc0 ->
     *     {"pk": 18146216698022176, "type": "highlight"})
     */
    get: operations["share_by_code_v1_share_by_code_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/share/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Works for stories and highlights only ig...m.com/s/aGln(link must contain /s/) or use (/v1/media/by/url, /v1/story/by/url)
     * @description Get share object by url (
     *     https://www.ins...ram.com/s/aGlnaGxpZ2h0OjE4MTQ2MjE2Njk4MDIyMTc0 ->
     *     {"pk": 18146216698022176, "type": "highlight"})
     */
    get: operations["share_by_url_v1_share_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/sys/balance": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Requests left and money on the account (free, not billed)
     * @description Balance of your account: how many requests are left and how much money is on it.
     *
     *     **The two values refresh at different rates:**
     *
     *     * `requests` is **real time**, it goes down with every call you make.
     *     * `amount` is **settled once per hour**, spending is charged in whole
     *       hours, a few minutes after the hour ends. Between charges `amount` looks
     *       frozen even though you are spending. Top-ups are the exception: they
     *       appear within seconds.
     *
     *     So use `requests` for quota checks and low-balance alerts, and `amount` for
     *     accounting. Calling this endpoint is free, it does not consume a request.
     */
    get: operations["balance_sys_balance_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/highlight/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Highlight By Id
     * @deprecated
     * @description Prefer v2/highlight/by/id
     */
    get: operations["highlight_by_id_v1_highlight_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/comments/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Use /v1/media/comments/chunk or /v2/media/comments instead
     * @deprecated
     * @description Get comments on a media
     */
    get: operations["media_comments_chunk_gql_comments_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/hashtag/medias/clips": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Switch to /v2/fbsearch/reels, this endpoint will be deprecated soon. It currently returns all media types, not just reels.
     * @deprecated
     * @description Get hashtag chunk of clips (reels)
     */
    get: operations["hashtag_medias_clips_chunk_v2_hashtag_medias_clips_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v3/fbsearch/topsearch": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using /gql/topsearch as this endpoint has pagination issues with duplicate results
     * @deprecated
     * @description Search top content by keyword
     */
    get: operations["fbsearch_top_v3_fbsearch_topsearch_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v3/fbsearch/reels": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Deprecated due to pagination issues with duplicate results
     * @deprecated
     * @description Search reels by keyword
     */
    get: operations["fbsearch_reels_v3_fbsearch_reels_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Use /v1/media/comments/chunk or /v2/media/comments instead
     * @deprecated
     * @description Get comments on a media
     */
    get: operations["media_comments_gql_comments_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/comments/threaded/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Use /v2/media/comments/replies instead
     * @deprecated
     * @description Get threaded comments for comment
     */
    get: operations["media_comments_threaded_chunk_gql_comments_threaded_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/comment/likers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Preferable to use /gql/comment/likers/chunk
     * @deprecated
     * @description Get likers on a comment
     */
    get: operations["comment_likers_gql_comment_likers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/search/accounts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Switch to /v2/fbsearch/accounts, this endpoint will be deprecated soon. The current route doesn't support paging.
     * @deprecated
     * @description Search accounts
     */
    get: operations["search_accounts_v2_search_accounts_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/search/topsearch": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using /v3/fbsearch/topsearch as this endpoint will be deprecated soon
     * @deprecated
     * @description Search top content by keyword
     */
    get: operations["search_top_v2_search_topsearch_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/medias": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Deprecated: may return 404 for existing accounts; use /g2/user/medias
     * @deprecated
     * @description This endpoint is deprecated. Use `GET /g2/user/medias` to retrieve a user's profile media.
     *
     *     **Warning:** this endpoint can intermittently return HTTP 404 (`Entries not found`) even for an existing public Instagram account with posts, including on the first page without `page_id`. A 404 from this endpoint does not by itself prove that the account does not exist or has no posts.
     *
     *     **Migration:** call `/g2/user/medias?user_id=<user_id>&flat=true`. The envelope is the same (`response` and `next_page_id`), but the cursor query parameter is `next_page_id` instead of `page_id`. Read media from `response.items`. Restart pagination without a cursor when switching endpoints; do not reuse a v2 `next_page_id` or the nested `response.next_max_id`. A g2 page holds up to 9 media (12 here), so expect more pages. Media fields may differ; adapt the client to the g2 response.
     */
    get: operations["user_medias_v2_user_medias_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/medias/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Deprecated: may return 404 for existing accounts; use /g2/user/medias
     * @deprecated
     * @description This endpoint is deprecated. Use `GET /g2/user/medias` to retrieve a user's profile media.
     *
     *     **Warning:** this endpoint can intermittently return HTTP 404 (`Entries not found`) even for an existing public Instagram account with posts, including on the first page without `end_cursor`. A 404 from this endpoint does not by itself prove that the account does not exist or has no posts.
     *
     *     **Migration:** call `/g2/user/medias?user_id=<user_id>&flat=true`. The response is an object with `response` and `next_page_id`, not the `[medias, end_cursor]` array returned here. Read media from `response.items` and pass the top-level `next_page_id` as the `next_page_id` query parameter for the next page. Restart pagination without a cursor when switching endpoints; do not reuse a v1 `end_cursor` or the nested `response.next_max_id`. A g2 page holds up to 9 media (12 here), so expect more pages. Media fields may differ; adapt the client to the g2 response.
     */
    get: operations["user_medias_chunk_v1_user_medias_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/search/reels": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using /v3/fbsearch/reels as this endpoint will be deprecated soon
     * @deprecated
     * @description Search top content by keyword
     */
    get: operations["search_reels_v2_search_reels_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/search/places": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using /v3/fbsearch/places as this endpoint will be deprecated soon
     * @deprecated
     * @description Search places
     */
    get: operations["search_places_v2_search_places_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/fbsearch/topsearch": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Use /gql/topsearch instead (broken upstream, IG returns 5xx)
     * @deprecated
     * @description Topsearch
     */
    get: operations["fbsearch_topsearch_v1_fbsearch_topsearch_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/web_profile_info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Deprecated. Instagram returns ~90% false UserNotFound since Feb 2, 2026. Use /gql/user/web_profile_info instead (accepts numeric user ID, much more reliable).
     * @deprecated
     */
    get: operations["web_profile_info_v1_user_web_profile_info_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/related/profiles": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using v2/user/suggested/profiles as this endpoint will be completely deprecated soon
     * @deprecated
     * @description Get related profiles by user id
     */
    get: operations["related_profiles_gql_user_related_profiles_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/g1/user/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Use /g2/user/followers. Get a user followers via legacy public GraphQL (one request required)
     * @deprecated
     * @description Billing: 1 requests per call.
     */
    get: operations["user_followers_g1_user_followers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/g1/user/following": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Use /g2/user/following. Get a user following via legacy public GraphQL (one request required)
     * @deprecated
     * @description Billing: 1 requests per call.
     */
    get: operations["user_following_g1_user_following_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/comments/threaded": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Use /v2/media/comments/replies instead
     * @deprecated
     * @description Get threaded comments for comment
     */
    get: operations["media_comments_threaded_gql_comments_threaded_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User By Id
     * @deprecated
     * @description Get user object by id
     */
    get: operations["user_by_id_gql_user_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/by/username": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get user object by username (one request required)
     * @deprecated
     * @description Get user object by username
     */
    get: operations["user_by_username_gql_user_by_username_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Use /g2/user/followers. Get a user followers (one request is required for every 46 followers)
     * @deprecated
     * @description Billing: 2 requests per call.
     */
    get: operations["user_followers_gql_user_followers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/gql/user/following": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Use /v2/user/following. Get a user following (one request is required for every 46 following)
     * @deprecated
     * @description Billing: 2 requests per call.
     */
    get: operations["user_following_gql_user_following_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/hashtag/medias/clips": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Use /v1/hashtag/medias/clips/chunk or /v2/hashtag/medias/clips instead
     * @deprecated
     * @description Get hashtag clips (reels)
     */
    get: operations["hashtag_medias_clips_v1_hashtag_medias_clips_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/hashtag/medias/recent": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag Medias Recent
     * @deprecated
     * @description Get hashtag medias top
     */
    get: operations["hashtag_medias_recent_v1_hashtag_medias_recent_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/hashtag/medias/recent/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag Medias Recent Chunk
     * @deprecated
     * @description Get hashtag chunk of recent medias
     */
    get: operations["hashtag_medias_recent_chunk_v1_hashtag_medias_recent_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/hashtag/medias/top": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Use /v1/hashtag/medias/top/chunk or /v2/hashtag/medias/top instead
     * @deprecated
     * @description Get hashtag medias top
     */
    get: operations["hashtag_medias_top_v1_hashtag_medias_top_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/hashtag/medias/top/recent/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Use /v1/hashtag/medias/top/chunk or /v2/hashtag/medias/top instead
     * @deprecated
     * @description Get hashtag chunk of recent medias
     */
    get: operations["hashtag_medias_top_recent_chunk_v1_hashtag_medias_top_recent_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get media comments (one request is required for every 20 comments)
     * @deprecated
     * @description Get comments on a media
     */
    get: operations["media_comments_v1_media_comments_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/download/photo": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Photo Download
     * @deprecated
     * @description Download photo using media pk
     */
    get: operations["photo_download_v1_media_download_photo_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/download/photo/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Photo Download By Url
     * @deprecated
     * @description Download photo using URL
     */
    get: operations["photo_download_by_url_v1_media_download_photo_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/download/video": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Video Download
     * @deprecated
     * @description Download video using media pk
     */
    get: operations["video_download_v1_media_download_video_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/media/download/video/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Video Download By Url
     * @deprecated
     * @description Download video using URL
     */
    get: operations["video_download_by_url_v1_media_download_video_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/clips": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Use v1/user/clips/chunk. Get user clips - first page
     * @deprecated
     * @description Get user clips
     */
    get: operations["user_clips_v1_user_clips_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Use /g2/user/followers of /v1/user/followers/chunk. Get first page user followers
     * @deprecated
     * @description Get followers users
     */
    get: operations["user_followers_v1_user_followers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/following": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Use /v2/user/following or /v1/user/following/chunk. Get first page user following
     * @deprecated
     * @description Get following users
     */
    get: operations["user_following_v1_user_following_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/guides": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Guides V1
     * @deprecated
     * @description Get user guides
     */
    get: operations["user_guides_v1_v1_user_guides_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/medias": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Use /g2/user/medias. Get user medias - first page
     * @deprecated
     * @description Get user medias
     */
    get: operations["user_medias_v1_user_medias_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/tag/medias": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Usertag Medias
     * @deprecated
     * @description Prefer to use /v2/user/tag/medias
     */
    get: operations["usertag_medias_v1_user_tag_medias_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/videos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using /v2/user/clips or /v2/user/medias instead
     * @deprecated
     * @description Get user videos
     */
    get: operations["user_videos_v1_user_videos_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/videos/chunk": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using /v2/user/clips or /v2/user/medias instead
     * @deprecated
     * @description Get part of user videos with cursor (default 50 media per request)
     */
    get: operations["user_videos_chunk_v1_user_videos_chunk_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/by/code": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using /v2/media/info/by/code as this endpoint will be completely deprecated soon
     * @deprecated
     * @description Get media object
     */
    get: operations["media_by_code_v2_media_by_code_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/by/id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using /v2/media/info/by/id as this endpoint will be completely deprecated soon
     * @deprecated
     * @description Get media object
     */
    get: operations["media_by_id_v2_media_by_id_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/media/by/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using /v2/media/info/by/url as this endpoint will be completely deprecated soon
     * @deprecated
     * @description Get media object
     */
    get: operations["media_by_url_v2_media_by_url_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * WARNING: Use /g2/user/followers. Get a user followers (one request required)
     * @deprecated
     * @description Get part (one page) of followers users with cursor
     */
    get: operations["user_followers_v2_user_followers_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v2/user/videos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Prefer using /v2/user/clips or /v2/user/medias instead
     * @deprecated
     * @description Get part of user videos with cursor (default 50 media per request)
     */
    get: operations["user_videos_v2_user_videos_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /** About */
    About: {
      /**
       * Username
       * @default
       */
      username: string | null;
      /**
       * Is Verified
       * @default false
       */
      is_verified: boolean | null;
      /**
       * Country
       * @default
       */
      country: string | null;
      /**
       * Date
       * @default
       */
      date: string | null;
      /**
       * Former Usernames
       * @default
       */
      former_usernames: string | null;
    };
    /** Balance */
    Balance: {
      /**
       * Requests
       * @description How many requests are **left** on the account, not the number you have already made. Real time: every call is deducted the moment it arrives, and calls we do not bill (429, 5xx, service unavailable) are refunded to the counter right away.
       * @example 129627
       */
      requests: number;
      /**
       * Rate
       * @description Rate limit of your account, requests per second.
       * @example 11
       */
      rate: number;
      /**
       * Currency
       * @description Currency of `amount`.
       * @example USD
       */
      currency: string;
      /**
       * Amount
       * @description Money left on the account. **Updated once per hour**: usage is charged in whole hours, a few minutes after the hour closes, so between two charges this value does not move while you keep spending. Top-ups are applied within seconds. Reported as `0.0` once `requests` reaches 0.
       * @example 2592.5777
       */
      amount: number;
    };
    /** Comment */
    Comment: {
      /** Pk */
      pk: string;
      /** Text */
      text: string;
      user: components["schemas"]["UserShort"];
      /**
       * Created At Utc
       * Format: date-time
       */
      created_at_utc: string;
      /** Content Type */
      content_type: string;
      /** Status */
      status: string;
      /** Has Liked */
      has_liked?: boolean | null;
      /** Like Count */
      like_count?: number | null;
    };
    /** Guide */
    Guide: {
      /** Id */
      id?: string | null;
      /** Title */
      title?: string | null;
      /** Description */
      description: string;
      cover_media: components["schemas"]["Media"];
      /** Feedback Item */
      feedback_item?: {
        [key: string]: unknown;
      } | null;
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /** Hashtag */
    Hashtag: {
      /** Id */
      id?: string | null;
      /** Name */
      name: string;
      /** Media Count */
      media_count?: number | null;
      /** Allow Following */
      allow_following?: boolean | null;
      /** Profile Pic Url */
      profile_pic_url?: string | null;
    };
    /** Highlight */
    Highlight: {
      /** Pk */
      pk: string;
      /** Id */
      id: string;
      /** Latest Reel Media */
      latest_reel_media?: number | null;
      /** Cover Media */
      cover_media?: {
        [key: string]: unknown;
      } | null;
      user: components["schemas"]["UserShort"];
      /** Title */
      title: string;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /** Is Pinned Highlight */
      is_pinned_highlight: boolean;
      /** Media Count */
      media_count: number;
      /**
       * Media Ids
       * @default []
       */
      media_ids: number[];
      /**
       * Items
       * @default []
       */
      items: components["schemas"]["Story"][];
    };
    /** Location */
    Location: {
      /** Pk */
      pk?: number | null;
      /** Name */
      name: string;
      /**
       * Phone
       * @default
       */
      phone: string | null;
      /**
       * Website
       * @default
       */
      website: string | null;
      /**
       * Category
       * @default
       */
      category: string | null;
      /**
       * Hours
       * @default {}
       */
      hours: {
        [key: string]: unknown;
      } | null;
      /**
       * Address
       * @default
       */
      address: string | null;
      /**
       * City
       * @default
       */
      city: string | null;
      /**
       * Zip
       * @default
       */
      zip: string | null;
      /** Lng */
      lng?: number | null;
      /** Lat */
      lat?: number | null;
      /** External Id */
      external_id?: string | null;
      /** External Id Source */
      external_id_source?: string | null;
    };
    /** Media */
    Media: {
      /** Pk */
      pk: string;
      /** Id */
      id: string;
      /** Code */
      code: string;
      /**
       * Taken At
       * Format: date-time
       */
      taken_at: string;
      /** Taken At Ts */
      taken_at_ts: number;
      /** Media Type */
      media_type: number;
      /**
       * Product Type
       * @default
       */
      product_type: string | null;
      /** Thumbnail Url */
      thumbnail_url?: string | null;
      location?: components["schemas"]["Location"] | null;
      user: components["schemas"]["UserShort"];
      /**
       * Comment Count
       * @default 0
       */
      comment_count: number | null;
      /**
       * Comments Disabled
       * @default false
       */
      comments_disabled: boolean | null;
      /** Like Count */
      like_count: number;
      /** Play Count */
      play_count?: number | null;
      /** Has Liked */
      has_liked?: boolean | null;
      /** Caption Text */
      caption_text: string;
      /** Accessibility Caption */
      accessibility_caption?: string | null;
      /** Usertags */
      usertags: components["schemas"]["Usertag"][];
      /**
       * Sponsor Tags
       * @default []
       */
      sponsor_tags: components["schemas"]["UserShort"][] | null;
      /** Video Url */
      video_url?: string | null;
      /**
       * View Count
       * @default 0
       */
      view_count: number | null;
      /**
       * Video Duration
       * @default 0
       */
      video_duration: number | null;
      /**
       * Title
       * @default
       */
      title: string | null;
      /**
       * Resources
       * @default []
       */
      resources: components["schemas"]["Resource"][];
      /**
       * Image Versions
       * @default []
       */
      image_versions: {
        [key: string]: unknown;
      }[];
      /**
       * Video Versions
       * @default []
       */
      video_versions: {
        [key: string]: unknown;
      }[];
      /**
       * Clips Metadata
       * @default {}
       */
      clips_metadata: {
        [key: string]: unknown;
      };
      /**
       * Video Dash Manifest
       * @default
       */
      video_dash_manifest: string | null;
      /** Like And View Counts Disabled */
      like_and_view_counts_disabled?: boolean | null;
      /**
       * Coauthor Producers
       * @default []
       */
      coauthor_producers: unknown[] | null;
      /** Is Paid Partnership */
      is_paid_partnership?: boolean | null;
    };
    /** MediaOembed */
    MediaOembed: {
      /** Title */
      title: string;
      /** Author Name */
      author_name: string;
      /** Author Url */
      author_url: string;
      /** Author Id */
      author_id: string;
      /** Media Id */
      media_id: string;
      /** Provider Name */
      provider_name: string;
      /** Provider Url */
      provider_url: string;
      /** Type */
      type: string;
      /** Width */
      width?: number | null;
      /** Height */
      height?: number | null;
      /** Html */
      html: string;
      /** Thumbnail Url */
      thumbnail_url: string;
      /** Thumbnail Width */
      thumbnail_width: number;
      /** Thumbnail Height */
      thumbnail_height: number;
      /** Can View */
      can_view?: boolean | null;
    };
    /** PageResponse */
    PageResponse: {
      /**
       * Response
       * @description Raw Instagram API response dict. Structure varies by endpoint.
       * @example {
       *       "items": [
       *         {
       *           "...": "...",
       *           "id": "123456_789",
       *           "media_type": 1,
       *           "pk": 123456
       *         }
       *       ],
       *       "paging_info": {
       *         "max_id": "cursor_string",
       *         "more_available": true
       *       },
       *       "status": "ok"
       *     }
       */
      response: {
        [key: string]: unknown;
      };
      /**
       * Next Page Id
       * @description Cursor for the next page. Pass as page_id in the next request. null if no more pages.
       * @example QVFCcnhIWE82OUswLXBtNzlpZ0ZaUnhWZEhr...
       */
      next_page_id: string | null;
    };
    /** ReelOwner */
    ReelOwner: {
      /** Id */
      id: number;
      /** Profile Pic Url */
      profile_pic_url: string;
      /** Username */
      username: string;
    };
    /** Resource */
    Resource: {
      /** Pk */
      pk: string;
      /** Id */
      id: string;
      /** Video Url */
      video_url?: string | null;
      /** Thumbnail Url */
      thumbnail_url: string;
      /** Media Type */
      media_type: number;
      /** Product Type */
      product_type?: string | null;
      /**
       * Image Versions
       * @default []
       */
      image_versions: {
        [key: string]: unknown;
      }[];
      /**
       * Video Versions
       * @default []
       */
      video_versions: {
        [key: string]: unknown;
      }[];
      /** Preview */
      preview?: string | null;
      /** Carousel Parent Id */
      carousel_parent_id?: string | null;
      /** Commerciality Status */
      commerciality_status?: string | null;
      /** Taken At */
      taken_at?: number | null;
    };
    /** Share */
    Share: {
      /** Pk */
      pk: string;
      /** Type */
      type: string;
    };
    /**
     * ShopCollection
     * @description Подборка товаров магазина: вкладка витрины.
     */
    ShopCollection: {
      /** Encoded Collection Id */
      encoded_collection_id: string;
      /** Collection Type */
      collection_type: string;
      /** Collection Page Id */
      collection_page_id?: number | null;
      /** Name */
      name?: string | null;
    };
    /**
     * ShopInfo
     * @description «About this shop»: com.bloks.www.bloks.commerce.about_shop
     */
    ShopInfo: {
      /** Name */
      name?: string | null;
      /** Business Address */
      business_address?: string | null;
      /** Email */
      email?: string | null;
      /** Phone */
      phone?: string | null;
      /** Website Url */
      website_url?: string | null;
      /** Privacy Policy Url */
      privacy_policy_url?: string | null;
      /** Shop Logo Url */
      shop_logo_url?: string | null;
    };
    /** ShopProduct */
    ShopProduct: {
      /** Product Id */
      product_id: string;
      /** Merchant Id */
      merchant_id: string;
      /** Merchant Pk */
      merchant_pk?: number | null;
      /** Merchant Username */
      merchant_username?: string | null;
      /** Title */
      title: string;
      /** Price */
      price?: string | null;
      /** Full Price */
      full_price?: string | null;
      /** Price Amount */
      price_amount?: number | null;
      /** Full Price Amount */
      full_price_amount?: number | null;
      /** Image Url */
      image_url?: string | null;
      /** Image Id */
      image_id?: string | null;
      /** Image Width */
      image_width?: number | null;
      /** Image Height */
      image_height?: number | null;
      /** External Url */
      external_url?: string | null;
      /** Checkout Style */
      checkout_style?: string | null;
    };
    /**
     * ShopStorefront
     * @description Витрина магазина: com.bloks.www.minishops.storefront.ig
     */
    ShopStorefront: {
      /** Merchant Id */
      merchant_id: string;
      /** Merchant Pk */
      merchant_pk: number;
      /** Merchant Username */
      merchant_username?: string | null;
      /** Collections */
      collections: components["schemas"]["ShopCollection"][];
      /** Products */
      products: components["schemas"]["ShopProduct"][];
    };
    /** Story */
    Story: {
      /** Pk */
      pk: string;
      /** Id */
      id: string;
      /** Code */
      code: string;
      /**
       * Taken At
       * Format: date-time
       */
      taken_at: string;
      /** Media Type */
      media_type?: number | null;
      /**
       * Product Type
       * @default
       */
      product_type: string | null;
      /** Thumbnail Url */
      thumbnail_url?: string | null;
      user: components["schemas"]["UserShort"];
      /** Video Url */
      video_url?: string | null;
      /**
       * Video Duration
       * @default 0
       */
      video_duration: number | null;
      /**
       * Sponsor Tags
       * @default []
       */
      sponsor_tags: components["schemas"]["UserShort"][] | null;
      /** Mentions */
      mentions: components["schemas"]["StoryMention"][];
      /** Links */
      links: components["schemas"]["StoryLink"][];
      /** Hashtags */
      hashtags: components["schemas"]["StoryHashtag"][];
      /** Locations */
      locations: components["schemas"]["StoryLocation"][];
      /** Stickers */
      stickers: components["schemas"]["StorySticker"][];
      /**
       * Medias
       * @default []
       */
      medias: components["schemas"]["StoryMedia"][];
    };
    /** StoryHashtag */
    StoryHashtag: {
      hashtag: components["schemas"]["Hashtag"];
      /** X */
      x?: number | null;
      /** Y */
      y?: number | null;
      /** Width */
      width?: number | null;
      /** Height */
      height?: number | null;
    };
    /** StoryLink */
    StoryLink: {
      /** Weburi */
      webUri: string;
      /**
       * X
       * @default 0.5126011
       */
      x: number;
      /**
       * Y
       * @default 0.5168225
       */
      y: number;
      /**
       * Z
       * @default 0
       */
      z: number;
      /**
       * Width
       * @default 0.50998676
       */
      width: number;
      /**
       * Height
       * @default 0.25875
       */
      height: number;
      /**
       * Rotation
       * @default 0
       */
      rotation: number;
    };
    /** StoryLocation */
    StoryLocation: {
      location: components["schemas"]["Location"];
      /** X */
      x?: number | null;
      /** Y */
      y?: number | null;
      /** Width */
      width?: number | null;
      /** Height */
      height?: number | null;
    };
    /** StoryMedia */
    StoryMedia: {
      /**
       * X
       * @default 0.5
       */
      x: number;
      /**
       * Y
       * @default 0.4997396
       */
      y: number;
      /**
       * Z
       * @default 0
       */
      z: number;
      /**
       * Width
       * @default 0.8
       */
      width: number;
      /**
       * Height
       * @default 0.60572916
       */
      height: number;
      /**
       * Rotation
       * @default 0
       */
      rotation: number;
      /** Is Pinned */
      is_pinned?: boolean | null;
      /** Is Hidden */
      is_hidden?: boolean | null;
      /** Is Sticker */
      is_sticker?: boolean | null;
      /** Is Fb Sticker */
      is_fb_sticker?: boolean | null;
      /** Media Pk */
      media_pk: string;
      /** User Id */
      user_id?: string | null;
      /** Product Type */
      product_type?: string | null;
      /** Media Code */
      media_code?: string | null;
    };
    /** StoryMention */
    StoryMention: {
      user: components["schemas"]["UserShort"];
      /** X */
      x?: number | null;
      /** Y */
      y?: number | null;
      /** Width */
      width?: number | null;
      /** Height */
      height?: number | null;
    };
    /** StorySticker */
    StorySticker: {
      /** Id */
      id?: string | null;
      /**
       * Type
       * @default gif
       */
      type: string | null;
      /** X */
      x: number;
      /** Y */
      y: number;
      /**
       * Z
       * @default 1000005
       */
      z: number | null;
      /** Width */
      width: number;
      /** Height */
      height: number;
      /**
       * Rotation
       * @default 0
       */
      rotation: number | null;
      story_link?: components["schemas"]["StoryStickerLink"] | null;
      /**
       * Extra
       * @default {}
       */
      extra: {
        [key: string]: unknown;
      } | null;
    };
    /** StoryStickerLink */
    StoryStickerLink: {
      /** Url */
      url?: string | null;
      /** Link Title */
      link_title?: string | null;
      /** Link Type */
      link_type?: string | null;
      /** Display Url */
      display_url?: string | null;
    };
    /** Track */
    Track: {
      /** Id */
      id: string;
      /** Title */
      title: string;
      /** Subtitle */
      subtitle: string;
      /** Display Artist */
      display_artist: string;
      /** Audio Cluster Id */
      audio_cluster_id: string;
      /** Artist Id */
      artist_id?: string | null;
      /** Cover Artwork Uri */
      cover_artwork_uri: string;
      /** Cover Artwork Thumbnail Uri */
      cover_artwork_thumbnail_uri: string;
      /** Progressive Download Url */
      progressive_download_url?: string | null;
      /** Fast Start Progressive Download Url */
      fast_start_progressive_download_url?: string | null;
      /** Reactive Audio Download Url */
      reactive_audio_download_url?: string | null;
      /** Highlight Start Times In Ms */
      highlight_start_times_in_ms: number[];
      /** Is Explicit */
      is_explicit: boolean;
      /** Dash Manifest */
      dash_manifest: string;
      /** Has Lyrics */
      has_lyrics: boolean;
      /** Audio Asset Id */
      audio_asset_id: string;
      /** Duration In Ms */
      duration_in_ms: number;
      /** Dark Message */
      dark_message?: string | null;
      /** Allows Saving */
      allows_saving: boolean;
      /** Territory Validity Periods */
      territory_validity_periods?: {
        [key: string]: unknown;
      } | null;
    };
    /** User */
    User: {
      /** Pk */
      pk: string | number;
      /** Username */
      username?: string | null;
      /** Full Name */
      full_name?: string | null;
      /** Is Private */
      is_private?: boolean | null;
      /** Profile Pic Url */
      profile_pic_url?: string | null;
      /** Profile Pic Url Hd */
      profile_pic_url_hd?: string | null;
      /** Is Verified */
      is_verified?: boolean | null;
      /** Media Count */
      media_count?: number | null;
      /** Follower Count */
      follower_count?: number | null;
      /** Following Count */
      following_count?: number | null;
      /**
       * Biography
       * @default
       */
      biography: string | null;
      /** External Url */
      external_url?: string | null;
      /** Account Type */
      account_type?: number | null;
      /** Is Business */
      is_business?: boolean | null;
      /** Public Email */
      public_email?: string | null;
      /** Contact Phone Number */
      contact_phone_number?: string | null;
      /** Public Phone Country Code */
      public_phone_country_code?: string | null;
      /** Public Phone Number */
      public_phone_number?: string | null;
      /** Business Contact Method */
      business_contact_method?: string | null;
      /** Business Category Name */
      business_category_name?: string | null;
      /** Category Name */
      category_name?: string | null;
      /** Category */
      category?: string | null;
      /** Address Street */
      address_street?: string | null;
      /** City Id */
      city_id?: string | number | null;
      /** City Name */
      city_name?: string | null;
      /** Latitude */
      latitude?: number | null;
      /** Longitude */
      longitude?: number | null;
      /** Zip */
      zip?: string | null;
      /** Instagram Location Id */
      instagram_location_id?: string | null;
      /** Interop Messaging User Fbid */
      interop_messaging_user_fbid?: string | number | null;
    };
    /** UserReel */
    UserReel: {
      /** Id */
      id: number;
      /** Expiring At */
      expiring_at: number;
      /** Has Pride Media */
      has_pride_media: boolean;
      /** Latest Reel Media */
      latest_reel_media?: number | null;
      /** Seen */
      seen?: number | null;
      owner: components["schemas"]["ReelOwner"];
    };
    /** UserShort */
    UserShort: {
      /** Pk */
      pk: string | number;
      /** Id */
      id?: string | number | null;
      /** Username */
      username?: string | null;
      /**
       * Full Name
       * @default
       */
      full_name: string | null;
      /** Profile Pic Url */
      profile_pic_url?: string | null;
      /** Profile Pic Url Hd */
      profile_pic_url_hd?: string | null;
      /** Is Private */
      is_private?: boolean | null;
      /** Is Verified */
      is_verified?: boolean | null;
      /** Account Badges */
      account_badges?: unknown[] | null;
    };
    /** UserShortWithReel */
    UserShortWithReel: {
      /** Pk */
      pk: string | number;
      /** Id */
      id?: string | number | null;
      /** Username */
      username?: string | null;
      /**
       * Full Name
       * @default
       */
      full_name: string | null;
      /** Profile Pic Url */
      profile_pic_url?: string | null;
      /** Profile Pic Url Hd */
      profile_pic_url_hd?: string | null;
      /** Is Private */
      is_private?: boolean | null;
      /** Is Verified */
      is_verified?: boolean | null;
      /** Account Badges */
      account_badges?: unknown[] | null;
      reel: components["schemas"]["UserReel"];
    };
    /** Usertag */
    Usertag: {
      user: components["schemas"]["UserShort"];
      /** X */
      x: number;
      /** Y */
      y: number;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  fbsearch_top_v2_fbsearch_topsearch_get: {
    parameters: {
      query: {
        query: string;
        next_max_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "list": [
           *         {
           *           "position": 0,
           *           "user": {
           *             "...": "..."
           *           }
           *         },
           *         "... (1 more items)"
           *       ],
           *       "rank_token": "551e3787-6b05-4aa8-9c6f-c5cd184f7af6",
           *       "clear_client_cache": false,
           *       "more_results_header": "Posts",
           *       "entity_results_header": "Accounts",
           *       "media_grid": {
           *         "refinements": {},
           *         "sections": [
           *           {
           *             "...": "..."
           *           },
           *           "... (3 more items)"
           *         ],
           *         "rank_token": "551e3787-6b05-4aa8-9c6f-c5cd184f7af6",
           *         "next_max_id": "968edc0e78c741ada0c35e55288deb5e",
           *         "has_more": true,
           *         "auto_load_more_enabled": true,
           *         "grid_post_click_experience": "contextual",
           *         "topic_status": -1,
           *         "reels_max_id": "r:0f59cf5ea79d4c2a9e897fb63e42357c",
           *         "has_more_reels": true,
           *         "reels_page_index": 3,
           *         "autoplay_type": "single"
           *       },
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_comments_v2_media_comments_get: {
    parameters: {
      query: {
        id: string;
        can_support_threading?: boolean | null;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
        page_id?: string | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of comments */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_by_username_v2_user_by_username_get: {
    parameters: {
      query: {
        username: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "user": {
           *         "strong_id__": "25025320",
           *         "pk": 25025320,
           *         "id": "25025320",
           *         "full_name": "Instagram",
           *         "username": "instagram",
           *         "biography": "Discover what's new on Instagram 🔎✨",
           *         "profile_pic_url": "https://cdn.example.com/...",
           *         "is_opal_enabled": false,
           *         "eligible_for_text_app_activation_badge": false,
           *         "highlights_tray_type": "DEFAULT",
           *         "account_type": 3,
           *         "bio_links": [
           *           {
           *             "...": "..."
           *           }
           *         ],
           *         "is_call_to_action_enabled": false,
           *         "is_business": false,
           *         "biography_with_entities": {
           *           "raw_text": "Discover what's new on Instagram 🔎✨",
           *           "entities": [
           *             "..."
           *           ]
           *         },
           *         "...": "(219 more fields)"
           *       },
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_medias_gql_user_medias_get: {
    parameters: {
      query: {
        user_id: string;
        profile_grid_items_cursor?: string;
        /** @description Flatten nested media objects into a single list */
        flat?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "stream_rows": [
           *         {
           *           "data": {
           *             "...": "..."
           *           },
           *           "extensions": {
           *             "...": "..."
           *           },
           *           "status": "ok"
           *         },
           *         "... (13 more items)"
           *       ]
           *     }
           */
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_stories_v2_user_stories_get: {
    parameters: {
      query: {
        user_id: string;
        /** @description Skip account privacy check */
        force?: boolean | null;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "reel": {
           *         "id": 25025320,
           *         "strong_id__": "25025320",
           *         "latest_reel_media": 1775146773,
           *         "seen": 0,
           *         "can_reply": false,
           *         "can_gif_quick_reply": true,
           *         "can_reshare": true,
           *         "reel_type": "user_reel",
           *         "can_react_with_avatar": false,
           *         "prefetch_count": 0,
           *         "expiring_at": 1775233173,
           *         "...": "(12 more fields)"
           *       },
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_by_id_v2_user_by_id_get: {
    parameters: {
      query: {
        id: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "user": {
           *         "strong_id__": "25025320",
           *         "pk": 25025320,
           *         "id": "25025320",
           *         "full_name": "Instagram",
           *         "username": "instagram",
           *         "biography": "Discover what's new on Instagram 🔎✨",
           *         "profile_pic_url": "https://cdn.example.com/...",
           *         "is_opal_enabled": false,
           *         "eligible_for_text_app_activation_badge": false,
           *         "highlights_tray_type": "DEFAULT",
           *         "account_type": 3,
           *         "bio_links": [
           *           {
           *             "...": "..."
           *           }
           *         ],
           *         "is_call_to_action_enabled": false,
           *         "is_business": false,
           *         "biography_with_entities": {
           *           "raw_text": "Discover what's new on Instagram 🔎✨",
           *           "entities": [
           *             "..."
           *           ]
           *         },
           *         "...": "(219 more fields)"
           *       },
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_by_username_v1_user_by_username_get: {
    parameters: {
      query: {
        username: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_by_id_v1_user_by_id_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_about_v1_user_about_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["About"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_following_v2_user_following_get: {
    parameters: {
      query?: {
        /** @description Id of user account */
        user_id?: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (following) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_following_chunk_gql_user_following_chunk_get: {
    parameters: {
      query: {
        user_id: string;
        end_cursor?: string | null;
        /** @description Skip account privacy check */
        force?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (following) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [
            components["schemas"]["UserShort"][],
            string | null,
          ];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_followers_chunk_gql_user_followers_chunk_get: {
    parameters: {
      query: {
        user_id: string;
        end_cursor?: string | null;
        /** @description Skip account privacy check */
        force?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (followers) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [
            components["schemas"]["UserShortWithReel"][],
            string | null,
          ];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_clips_v2_user_clips_get: {
    parameters: {
      query?: {
        /** @description Id of user account */
        user_id?: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fetch_user_reposts_query_gql_user_reposts_get: {
    parameters: {
      query: {
        user_id: string;
        repost_next_max_id?: string;
        /** @description Flatten nested response into simple items list */
        flat?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_stories_by_username_v2_user_stories_by_username_get: {
    parameters: {
      query: {
        username: string;
        /** @description Skip account privacy check */
        force?: boolean | null;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "reel": {
           *         "id": 25025320,
           *         "strong_id__": "25025320",
           *         "latest_reel_media": 1775146773,
           *         "seen": 0,
           *         "can_reply": false,
           *         "can_gif_quick_reply": true,
           *         "can_reshare": true,
           *         "reel_type": "user_reel",
           *         "can_react_with_avatar": false,
           *         "prefetch_count": 0,
           *         "expiring_at": 1775233173,
           *         "...": "(12 more fields)"
           *       },
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  usertag_medias_v2_user_tag_medias_get: {
    parameters: {
      query?: {
        /** @description Id of user account */
        user_id?: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_stories_v1_user_stories_get: {
    parameters: {
      query: {
        user_id: string;
        amount?: number;
        /** @description Skip account privacy check */
        force?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Story"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_a2_user_get: {
    parameters: {
      query: {
        username: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "graphql": {
           *         "user": {
           *           "id": "25025320",
           *           "biography": "Discover what's new on Instagram 🔎✨",
           *           "full_name": "Instagram",
           *           "edge_followed_by": {
           *             "count": 700997627
           *           },
           *           "edge_follow": {
           *             "count": 234
           *           },
           *           "profile_pic_url": "https://cdn.example.com/...",
           *           "profile_pic_url_hd": "https://cdn.example.com/...",
           *           "edge_owner_to_timeline_media": {
           *             "count": 8389,
           *             "edges": [
           *               {
           *                 "node": {
           *                   "id": "3866530439053193313",
           *                   "shortcode": "DExample",
           *                   "display_url": "https://cdn.example.com/...",
           *                   "thumbnail_url": "https://cdn.example.com/...",
           *                   "__typename": "GraphImage",
           *                   "product_type": "feed",
           *                   "title": "",
           *                   "edge_media_to_caption": {
           *                     "edges": [
           *                       {
           *                         "node": {
           *                           "text": "Caption text"
           *                         }
           *                       }
           *                     ]
           *                   },
           *                   "edge_media_to_comment": {
           *                     "count": 12345
           *                   },
           *                   "edge_liked_by": {
           *                     "count": 678901
           *                   },
           *                   "edge_media_preview_like": {
           *                     "count": 678901
           *                   }
           *                 }
           *               },
           *               "... (11 more items)"
           *             ]
           *           }
           *         }
           *       }
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_highlights_v2_user_highlights_get: {
    parameters: {
      query: {
        user_id: string;
        /**
         * @deprecated
         * @description Deprecated and ignored. Use page_id / next_page_id to paginate.
         */
        amount?: number;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Skip account privacy check */
        force?: boolean | null;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "response": {
           *         "tray": [
           *           {
           *             "...": "..."
           *           },
           *           "... (10 more items)"
           *         ],
           *         "suggested_highlights": {},
           *         "highlights_tray_type": "DEFAULT",
           *         "status": "ok"
           *       }
           *     }
           */
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_highlights_by_username_v2_user_highlights_by_username_get: {
    parameters: {
      query: {
        username: string;
        /**
         * @deprecated
         * @description Deprecated and ignored. Use page_id / next_page_id to paginate.
         */
        amount?: number;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Skip account privacy check */
        force?: boolean | null;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "response": {
           *         "tray": [
           *           {
           *             "...": "..."
           *           },
           *           "... (10 more items)"
           *         ],
           *         "suggested_highlights": {},
           *         "highlights_tray_type": "DEFAULT",
           *         "status": "ok"
           *       }
           *     }
           */
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_clips_chunk_v1_user_clips_chunk_get: {
    parameters: {
      query: {
        user_id: string;
        end_cursor?: string | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [components["schemas"]["Media"][], string | null];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_clips_gql_user_clips_get: {
    parameters: {
      query: {
        user_id: string;
        max_id?: string;
        sort_by_views?: boolean;
        /** @description Flatten nested media objects into a single list */
        flat?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "stream_rows": [
           *         {
           *           "data": {
           *             "...": "..."
           *           },
           *           "extensions": {
           *             "...": "..."
           *           },
           *           "status": "ok"
           *         },
           *         "... (14 more items)"
           *       ]
           *     }
           */
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_by_url_v1_user_by_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  userstream_by_username_v2_userstream_by_username_get: {
    parameters: {
      query: {
        username: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "user": {
           *         "strong_id__": "25025320",
           *         "pk": 25025320,
           *         "id": "25025320",
           *         "full_name": "Instagram",
           *         "username": "instagram",
           *         "biography": "Discover what's new on Instagram 🔎✨",
           *         "profile_pic_url": "https://cdn.example.com/...",
           *         "is_opal_enabled": false,
           *         "eligible_for_text_app_activation_badge": false,
           *         "highlights_tray_type": "DEFAULT",
           *         "account_type": 3,
           *         "bio_links": [
           *           {
           *             "...": "..."
           *           }
           *         ],
           *         "is_call_to_action_enabled": false,
           *         "is_business": false,
           *         "biography_with_entities": {
           *           "raw_text": "Discover what's new on Instagram 🔎✨",
           *           "entities": [
           *             "..."
           *           ]
           *         },
           *         "...": "(219 more fields)"
           *       },
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  userstream_by_id_v2_userstream_by_id_get: {
    parameters: {
      query: {
        id: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "user": {
           *         "strong_id__": "25025320",
           *         "pk": 25025320,
           *         "id": "25025320",
           *         "full_name": "Instagram",
           *         "username": "instagram",
           *         "biography": "Discover what's new on Instagram 🔎✨",
           *         "profile_pic_url": "https://cdn.example.com/...",
           *         "is_opal_enabled": false,
           *         "eligible_for_text_app_activation_badge": false,
           *         "highlights_tray_type": "DEFAULT",
           *         "account_type": 3,
           *         "bio_links": [
           *           {
           *             "...": "..."
           *           }
           *         ],
           *         "is_call_to_action_enabled": false,
           *         "is_business": false,
           *         "biography_with_entities": {
           *           "raw_text": "Discover what's new on Instagram 🔎✨",
           *           "entities": [
           *             "..."
           *           ]
           *         },
           *         "...": "(219 more fields)"
           *       },
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_following_v1_user_search_following_get: {
    parameters: {
      query: {
        user_id: string;
        query: string;
        /** @description Skip account privacy check */
        force?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserShort"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_followers_v1_user_search_followers_get: {
    parameters: {
      query: {
        user_id: string;
        query: string;
        /** @description Skip account privacy check */
        force?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserShort"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_following_chunk_v1_user_following_chunk_get: {
    parameters: {
      query: {
        user_id: string;
        max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (following) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [
            components["schemas"]["UserShort"][],
            string | null,
          ];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_followers_chunk_v1_user_followers_chunk_get: {
    parameters: {
      query: {
        user_id: string;
        max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (followers) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [
            components["schemas"]["UserShort"][],
            string | null,
          ];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_followers_g2_user_followers_get: {
    parameters: {
      query: {
        user_id: string;
        page_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of followers */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "response": {
           *         "users": [
           *           {
           *             "...": "..."
           *           },
           *           "... (40 more items)"
           *         ],
           *         "should_limit_list_of_followers": true
           *       }
           *     }
           */
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_following_g2_user_following_get: {
    parameters: {
      query: {
        user_id: string;
        page_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of following users */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "response": {
           *         "users": [],
           *         "has_more": false
           *       }
           *     }
           */
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fetch_suggestion_details_v2_user_suggested_profiles_get: {
    parameters: {
      query: {
        user_id: string;
        expand_suggestion?: boolean;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  explore_businesses_by_id_v2_user_explore_businesses_by_id_get: {
    parameters: {
      query: {
        user_id: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (Business accounts) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_about_gql_user_about_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["About"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_clips_g2_user_clips_get: {
    parameters: {
      query: {
        user_id: string;
        page_id?: string;
        /** @description Requested page size; Instagram currently returns at most 12 */
        count?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Raw web profile reels page and its opaque continuation cursor */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "response": {
           *         "data": {
           *           "fetch__XDTUserDict": {
           *             "id": "1234567890",
           *             "clips_connection": {
           *               "edges": [
           *                 {
           *                   "node": {
           *                     "__typename": "XDTMediaDict",
           *                     "media": {
           *                       "id": "1234567890123456789_1234567890",
           *                       "code": "ABC123xyz",
           *                       "media_type": 2,
           *                       "product_type": "clips",
           *                       "play_count": 1200,
           *                       "like_count": 80,
           *                       "comment_count": 4
           *                     }
           *                   }
           *                 }
           *               ],
           *               "page_info": {
           *                 "has_next_page": true,
           *                 "end_cursor": "opaque-web-cursor"
           *               }
           *             }
           *           }
           *         }
           *       },
           *       "next_page_id": "opaque-web-cursor"
           *     }
           */
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_medias_g2_user_medias_get: {
    parameters: {
      query: {
        user_id: string;
        next_page_id?: string;
        flat?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description User's profile media grid. Media counters (play_count, like_count, comment_count, etc.) are returned as Instagram sends them. For the next page, pass the envelope's `next_page_id` back as the `next_page_id` query parameter. Ignore the raw `next_max_id` inside `response`, it is IG-internal metadata, not the cursor for this endpoint. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "response": {
           *         "items": [
           *           {
           *             "id": "3894831928272017840_80117947544",
           *             "code": "DYNOQDIgNmw",
           *             "play_count": 5041,
           *             "ig_play_count": 2427,
           *             "fb_play_count": 2614,
           *             "...": "..."
           *           }
           *         ],
           *         "next_max_id": "QVFB...",
           *         "more_available": true
           *       },
           *       "next_page_id": "QVFB..."
           *     }
           */
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_reposts_g2_user_reposts_get: {
    parameters: {
      query: {
        user_id: string;
        page_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Raw web profile reposts page and its opaque continuation cursor */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "response": {
           *         "data": {
           *           "fetch__XDTUserDict": {
           *             "id": "1234567890",
           *             "user_reposts_timeline": {
           *               "repost_grid_items": [
           *                 {
           *                   "media": {
           *                     "id": "9876543210987654321_1234567890",
           *                     "code": "XYZ987abc",
           *                     "media_type": 1,
           *                     "like_count": 42,
           *                     "comment_count": 3
           *                   }
           *                 }
           *               ],
           *               "repost_more_available": true,
           *               "repost_next_max_id": "opaque-web-cursor"
           *             }
           *           }
           *         }
           *       },
           *       "next_page_id": "opaque-web-cursor"
           *     }
           */
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_highlights_gql_user_highlights_get: {
    parameters: {
      query: {
        user_id: string;
        /** @description Use next_page_id from the previous response */
        page_id?: string | null;
        /** @description Requested page size; Instagram may return a different size */
        count?: number | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "response": {
           *         "data": {
           *           "highlights": {
           *             "edges": [
           *               {
           *                 "node": {
           *                   "id": "highlight:18195781759377100",
           *                   "title": "Roman",
           *                   "user": {
           *                     "username": "nasa",
           *                     "id": "528817151"
           *                   }
           *                 },
           *                 "cursor": "opaque-edge-cursor"
           *               }
           *             ],
           *             "...": "(4 more highlights)",
           *             "page_info": {
           *               "end_cursor": "opaque-end-cursor",
           *               "has_next_page": true,
           *               "has_previous_page": false
           *             }
           *           }
           *         },
           *         "extensions": {
           *           "is_final": true
           *         }
           *       },
           *       "next_page_id": "opaque-end-cursor"
           *     }
           */
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_stories_gql_user_stories_get: {
    parameters: {
      query: {
        user_id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "data": {
           *         "xdt_api__v1__feed__reels_media": {
           *           "reels_media": [
           *             {
           *               "id": "787132",
           *               "reel_type": "user_reel",
           *               "items": [
           *                 {
           *                   "id": "4002151353467755486_787132",
           *                   "pk": "4002151353467755486",
           *                   "media_type": 1,
           *                   "product_type": "story"
           *                 }
           *               ]
           *             }
           *           ]
           *         }
           *       },
           *       "extensions": {
           *         "server_metadata": {
           *           "request_start_time_ms": 1791381929635,
           *           "time_at_flush_ms": 1791381929930
           *         },
           *         "is_final": true
           *       }
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_web_profile_info_gql_user_web_profile_info_get: {
    parameters: {
      query: {
        user_id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "friendship_status": {
           *         "following": false,
           *         "blocking": false,
           *         "is_feed_favorite": false,
           *         "outgoing_request": false,
           *         "followed_by": false,
           *         "incoming_request": false,
           *         "is_restricted": false,
           *         "is_bestie": false,
           *         "muting": false,
           *         "is_muting_reel": false
           *       },
           *       "fbid_v2": "17841400039600391",
           *       "is_memorialized": false,
           *       "is_private": false,
           *       "is_coppa_enforced": false,
           *       "is_regulated_c18": false,
           *       "bio_links": [
           *         {
           *           "image_url": "",
           *           "is_pinned": false,
           *           "link_type": "external",
           *           "lynx_url": "https://cdn.example.com/...",
           *           "media_accent_color_hex": "",
           *           "media_type": "none",
           *           "title": "",
           *           "url": "http://help.instagram.com",
           *           "creation_source": "NONE"
           *         }
           *       ],
           *       "text_post_app_badge_label": "instagram",
           *       "show_text_post_app_badge": true,
           *       "username": "instagram",
           *       "...": "(47 more fields)"
           *     }
           */
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_highlights_v1_user_highlights_get: {
    parameters: {
      query: {
        user_id: string;
        /**
         * @deprecated
         * @description Deprecated. Returns at most the first page; use /v2/user/highlights (page_id / next_page_id) to paginate.
         */
        amount?: number;
        /** @description Skip account privacy check */
        force?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Highlight"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_highlights_by_username_v1_user_highlights_by_username_get: {
    parameters: {
      query: {
        username: string;
        /**
         * @deprecated
         * @description Deprecated. Returns at most the first page; use /v2/user/highlights (page_id / next_page_id) to paginate.
         */
        amount?: number;
        /** @description Skip account privacy check */
        force?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Highlight"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_pinned_medias_v1_user_medias_pinned_get: {
    parameters: {
      query: {
        user_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of medias */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_stories_by_username_v1_user_stories_by_username_get: {
    parameters: {
      query: {
        username: string;
        amount?: number;
        /** @description Skip account privacy check */
        force?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Story"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  usertag_medias_chunk_v1_user_tag_medias_chunk_get: {
    parameters: {
      query: {
        user_id: string;
        max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [components["schemas"]["Media"][], string | null];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_info_by_code_v2_media_info_by_code_get: {
    parameters: {
      query: {
        code: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "num_results": 1,
           *       "more_available": false,
           *       "items": [
           *         {
           *           "strong_id__": "3162273595027945978_123123",
           *           "id": "3162273595027945978_123123",
           *           "fbid": 17975970359404748,
           *           "deleted_reason": 0,
           *           "client_cache_key": "MzE2MjI3MzU5NTAyNzk0NTk3OA==.3",
           *           "integrity_review_decision": "pending",
           *           "pk": 3162273595027946000,
           *           "has_delayed_metadata": false,
           *           "mezql_token": "",
           *           "should_request_ads": false,
           *           "has_privately_liked": false,
           *           "is_quiet_post": false,
           *           "collaborator_edit_eligibility": false,
           *           "share_count_disabled": false,
           *           "is_visual_reply_commenter_notice_enabled": true,
           *           "...": "(96 more fields)"
           *         }
           *       ],
           *       "auto_load_more_enabled": true,
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_comments_replies_v2_media_comments_replies_get: {
    parameters: {
      query: {
        media_id: string;
        comment_id: string;
        min_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_likers_v2_media_likers_get: {
    parameters: {
      query: {
        id: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "users": [
           *         {
           *           "strong_id__": "59560451506",
           *           "pk": 59560451506,
           *           "pk_id": "59560451506",
           *           "id": "59560451506",
           *           "username": "batcha_de_leon",
           *           "full_name": "Just call me Batcha",
           *           "is_private": false,
           *           "is_verified": false,
           *           "profile_pic_id": "3839024502038602130_59560451506",
           *           "profile_pic_url": "https://cdn.example.com/...",
           *           "is_new": false,
           *           "latest_reel_media": 0
           *         },
           *         "... (54 more items)"
           *       ],
           *       "user_count": 55,
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_by_url_v1_media_by_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_comments_chunk_v1_media_comments_chunk_get: {
    parameters: {
      query: {
        id: string;
        min_id?: string;
        max_id?: string;
        can_support_threading?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of comments */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown[];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_info_by_url_v2_media_info_by_url_get: {
    parameters: {
      query: {
        url: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "num_results": 1,
           *       "more_available": false,
           *       "items": [
           *         {
           *           "strong_id__": "3162273595027945978_123123",
           *           "id": "3162273595027945978_123123",
           *           "fbid": 17975970359404748,
           *           "deleted_reason": 0,
           *           "client_cache_key": "MzE2MjI3MzU5NTAyNzk0NTk3OA==.3",
           *           "integrity_review_decision": "pending",
           *           "pk": 3162273595027946000,
           *           "has_delayed_metadata": false,
           *           "mezql_token": "",
           *           "should_request_ads": false,
           *           "has_privately_liked": false,
           *           "is_quiet_post": false,
           *           "collaborator_edit_eligibility": false,
           *           "share_count_disabled": false,
           *           "is_visual_reply_commenter_notice_enabled": true,
           *           "...": "(96 more fields)"
           *         }
           *       ],
           *       "auto_load_more_enabled": true,
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_by_code_v1_media_by_code_get: {
    parameters: {
      query: {
        code: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_info_by_id_v2_media_info_by_id_get: {
    parameters: {
      query: {
        id: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "num_results": 1,
           *       "more_available": false,
           *       "items": [
           *         {
           *           "strong_id__": "3162273595027945978_123123",
           *           "id": "3162273595027945978_123123",
           *           "fbid": 17975970359404748,
           *           "deleted_reason": 0,
           *           "client_cache_key": "MzE2MjI3MzU5NTAyNzk0NTk3OA==.3",
           *           "integrity_review_decision": "pending",
           *           "pk": 3162273595027946000,
           *           "has_delayed_metadata": false,
           *           "mezql_token": "",
           *           "should_request_ads": false,
           *           "has_privately_liked": false,
           *           "is_quiet_post": false,
           *           "collaborator_edit_eligibility": false,
           *           "share_count_disabled": false,
           *           "is_visual_reply_commenter_notice_enabled": true,
           *           "...": "(96 more fields)"
           *         }
           *       ],
           *       "auto_load_more_enabled": true,
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_likers_v1_media_likers_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserShort"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  insights_media_v1_media_insight_get: {
    parameters: {
      query: {
        media_id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            [key: string]: unknown;
          } | null;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_check_offensive_comment_v2_media_comment_offensive_get: {
    parameters: {
      query: {
        media_id: string;
        comment: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_oembed_v1_media_oembed_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["MediaOembed"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  graphql_query_getfulldatacomputingmediadictquery_chapi_gql_media_usertags_get: {
    parameters: {
      query?: {
        media_ids?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_likers_gql_media_likers_get: {
    parameters: {
      query: {
        media_id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example [
           *       {
           *         "pk": "2256048641",
           *         "__typename": "XDTUserDict",
           *         "username": "bowling_1141",
           *         "full_name": "Bowling Thitirat",
           *         "profile_pic_url": "https://cdn.example.com/...",
           *         "is_verified": false,
           *         "friendship_status": {
           *           "blocking": false,
           *           "is_feed_favorite": false,
           *           "following": false,
           *           "is_muting_reel": false,
           *           "muting": false,
           *           "outgoing_request": false,
           *           "followed_by": false,
           *           "incoming_request": false,
           *           "is_restricted": false,
           *           "is_bestie": false
           *         },
           *         "id": "2256048641"
           *       },
           *       "... (76 more items)"
           *     ]
           */
          "application/json": {
            [key: string]: unknown;
          }[];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_template_v2_media_template_get: {
    parameters: {
      query: {
        id: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "items": [
           *         {
           *           "media": {
           *             "...": "..."
           *           }
           *         }
           *       ],
           *       "metadata": {
           *         "template_clips_media_creator": "use_template",
           *         "clips_count": "1 reel",
           *         "image_versions2": {
           *           "additional_candidates": {
           *             "...": "..."
           *           },
           *           "candidates": [
           *             "..."
           *           ]
           *         },
           *         "template_title": "Original template"
           *       },
           *       "paging_info": {
           *         "max_id": "QVFCcnhIWE82OUswLXBt...",
           *         "more_available": true
           *       },
           *       "status": "ok",
           *       "status_code": "200"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  graphql_query_getfulldatacontentappreciationquery_chapi_gql_media_clips_metadata_get: {
    parameters: {
      query?: {
        media_ids?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_by_id_v1_media_by_id_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_code_from_pk_v1_media_code_from_pk_get: {
    parameters: {
      query: {
        pk: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": string;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_pk_from_code_v1_media_pk_from_code_get: {
    parameters: {
      query: {
        code: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": string;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_pk_from_url_v1_media_pk_from_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": string;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_user_v1_media_user_get: {
    parameters: {
      query: {
        media_id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserShort"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_comment_infos_v2_media_comments_infos_get: {
    parameters: {
      query?: {
        media_ids?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_likers_v3_media_likers_get: {
    parameters: {
      query: {
        id: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "users": [
           *         {
           *           "strong_id__": "59560451506",
           *           "pk": 59560451506,
           *           "pk_id": "59560451506",
           *           "id": "59560451506",
           *           "username": "batcha_de_leon",
           *           "full_name": "Just call me Batcha",
           *           "is_private": false,
           *           "is_verified": false,
           *           "profile_pic_id": "3839024502038602130_59560451506",
           *           "profile_pic_url": "https://cdn.example.com/...",
           *           "is_new": false,
           *           "latest_reel_media": 0
           *         },
           *         "... (54 more items)"
           *       ],
           *       "user_count": 55,
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  comment_likers_chunk_gql_comment_likers_chunk_get: {
    parameters: {
      query?: {
        comment_id?: string | null;
        /** @deprecated */
        media_id?: string | null;
        end_cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example [
           *       [
           *         {
           *           "id": "13277463868",
           *           "username": "example_user",
           *           "full_name": "Example User",
           *           "profile_pic_url": "https://cdn.example.com/...",
           *           "is_private": true,
           *           "is_verified": false,
           *           "followed_by_viewer": false,
           *           "requested_by_viewer": false
           *         },
           *         "... (49 more items)"
           *       ],
           *       "QVFEbzJ..."
           *     ]
           */
          "application/json": [
            {
              [key: string]: unknown;
            }[],
            string | null,
          ];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fbsearch_accounts_v3_fbsearch_accounts_get: {
    parameters: {
      query: {
        query: string;
        page_token?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "num_results": 20,
           *       "users": [
           *         {
           *           "strong_id__": "528817151",
           *           "fbid_v2": 17841401474538262,
           *           "pk": 528817151,
           *           "pk_id": "528817151",
           *           "is_verified_search_boosted": false,
           *           "search_serp_type": 3,
           *           "third_party_downloads_enabled": 1,
           *           "...": "(31 more fields)"
           *         },
           *         "... (19 more items)"
           *       ],
           *       "has_more": true,
           *       "rank_token": "rank_token_value...",
           *       "clear_client_cache": false,
           *       "page_token": "7d4d340812a243db9b494e4f013826e6",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_hashtags_v1_search_hashtags_get: {
    parameters: {
      query: {
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Hashtag"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_users_v1_search_users_get: {
    parameters: {
      query: {
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserShort"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fbsearch_reels_v2_fbsearch_reels_get: {
    parameters: {
      query: {
        query: string;
        reels_max_id?: string;
        rank_token?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "reels_serp_modules": [
           *         {
           *           "module_type": "clips",
           *           "clips": [
           *             "..."
           *           ]
           *         }
           *       ],
           *       "has_more": true,
           *       "reels_max_id": "r:b3fbe8219cce4db48b0fa020c8488872",
           *       "page_index": 12,
           *       "rank_token": "219b370d-514f-4eb9-b140-06321c037237",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fbsearch_accounts_v2_fbsearch_accounts_get: {
    parameters: {
      query: {
        query: string;
        page_token?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "num_results": 20,
           *       "users": [
           *         {
           *           "strong_id__": "528817151",
           *           "fbid_v2": 17841401474538262,
           *           "pk": 528817151,
           *           "pk_id": "528817151",
           *           "is_verified_search_boosted": false,
           *           "search_serp_type": 3,
           *           "third_party_downloads_enabled": 1,
           *           "id": "528817151",
           *           "full_name": "NASA",
           *           "is_private": false,
           *           "is_verified": true,
           *           "profile_pic_id": "1735715738009579084_528817151",
           *           "profile_pic_url": "https://cdn.example.com/...",
           *           "username": "nasa",
           *           "account_badges": [
           *             "..."
           *           ],
           *           "...": "(11 more fields)"
           *         },
           *         "... (19 more items)"
           *       ],
           *       "has_more": true,
           *       "rank_token": "rank_token_value...",
           *       "clear_client_cache": false,
           *       "page_token": "6cce7521a797481a871e466d5e59c388",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_music_v2_search_music_get: {
    parameters: {
      query: {
        query: string;
        next_max_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "items": [
           *         {
           *           "track": {
           *             "...": "..."
           *           },
           *           "metadata": {
           *             "...": "..."
           *           }
           *         },
           *         "... (11 more items)"
           *       ],
           *       "page_info": {
           *         "next_max_id": "10",
           *         "more_available": true
           *       },
           *       "alacorn_session_id": "0DkZIOgpApKxuqBo77100",
           *       "licensed_music_eligibility_state": "ELIGIBLE",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_hashtags_v2_search_hashtags_get: {
    parameters: {
      query: {
        query: string;
        page_token?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "results": [
           *         {
           *           "id": 17841538786105344,
           *           "name": "pythonprogramming",
           *           "media_count": 1125287,
           *           "formatted_media_count": "1.1M",
           *           "search_result_subtitle": "1.1M posts",
           *           "use_default_avatar": true,
           *           "challenge_id": 1
           *         },
           *         "... (54 more items)"
           *       ],
           *       "has_more": false,
           *       "rank_token": "rank_token_value...",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  topsearch_gql_topsearch_get: {
    parameters: {
      query: {
        query: string;
        end_cursor?: string;
        /** @description Flatten stream_rows into a single items[] list */
        flat?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "stream_rows": [
           *         {
           *           "data": {
           *             "...": "..."
           *           },
           *           "extensions": {
           *             "...": "..."
           *           },
           *           "status": "ok"
           *         },
           *         "... (16 more items)"
           *       ]
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fbsearch_places_v3_fbsearch_places_get: {
    parameters: {
      query: {
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "items": [
           *         {
           *           "location": {
           *             "...": "..."
           *           },
           *           "title": "Resorts World New York City",
           *           "subtitle": "110-00 Rockaway Blvd"
           *         },
           *         "... (29 more items)"
           *       ],
           *       "has_more": false,
           *       "rank_token": "rank_token_value...",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fbsearch_places_v1_fbsearch_places_get: {
    parameters: {
      query: {
        query: string;
        lat?: number | null;
        lng?: number | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Location"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_music_v1_search_music_get: {
    parameters: {
      query: {
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Track"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  web_search_topsearch_hashtags_v1_fbsearch_topsearch_hashtags_get: {
    parameters: {
      query: {
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Hashtag"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fbsearch_places_v2_fbsearch_places_get: {
    parameters: {
      query: {
        query: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "items": [
           *         {
           *           "location": {
           *             "...": "..."
           *           },
           *           "title": "New York",
           *           "subtitle": "3.1mi"
           *         },
           *         "... (29 more items)"
           *       ],
           *       "has_more": false,
           *       "rank_token": "rank_token_value...",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_medias_top_chunk_v2_hashtag_medias_top_get: {
    parameters: {
      query: {
        name: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_medias_recent_chunk_v2_hashtag_medias_recent_get: {
    parameters: {
      query: {
        name: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_medias_top_chunk_v1_hashtag_medias_top_chunk_get: {
    parameters: {
      query: {
        /**
         * @description Please make sure to use a clean hashtag without any special symbols.
         *
         *     **Good one**: love, sea, dog, 공구
         *
         *     **Bad one**: #dog, sea_., tanjung.., #공구.
         */
        name: string;
        max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [components["schemas"]["Media"][], string | null];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_by_name_v1_hashtag_by_name_get: {
    parameters: {
      query: {
        /**
         * @description Please make sure to use a clean hashtag without any special symbols.
         *
         *     **Good one**: love, sea, dog, 공구
         *
         *     **Bad one**: #dog, sea_., tanjung.., #공구.
         */
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Hashtag"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_by_name_v2_hashtag_by_name_get: {
    parameters: {
      query: {
        name: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "id": "17841562870113513",
           *       "name": "python",
           *       "media_count": 6917175,
           *       "allow_muting_story": true,
           *       "show_follow_drop_down": false,
           *       "formatted_media_count": "6.9M",
           *       "is_trending": true,
           *       "hide_use_hashtag_button": false,
           *       "status": "ok",
           *       "allow_following": false
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_medias_clips_chunk_v1_hashtag_medias_clips_chunk_get: {
    parameters: {
      query: {
        /**
         * @description Please make sure to use a clean hashtag without any special symbols.
         *
         *     **Good one**: love, sea, dog, 공구
         *
         *     **Bad one**: #dog, sea_., tanjung.., #공구.
         */
        name: string;
        max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [components["schemas"]["Media"][], string | null];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  track_by_id_v2_track_by_id_get: {
    parameters: {
      query: {
        track_id: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  track_stream_by_id_v2_track_stream_by_id_get: {
    parameters: {
      query: {
        track_id: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  track_by_canonical_id_v2_track_by_canonical_id_get: {
    parameters: {
      query: {
        canonical_id: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  location_by_id_g2_location_by_id_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  location_medias_recent_chunk_v1_location_medias_recent_chunk_get: {
    parameters: {
      query: {
        location_pk: number;
        max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [components["schemas"]["Media"][], string | null];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  location_medias_recent_v1_v1_location_medias_recent_get: {
    parameters: {
      query: {
        location_pk: number;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  location_search_v1_location_search_get: {
    parameters: {
      query: {
        lat: number;
        lng: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Location"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  location_medias_top_v1_v1_location_medias_top_get: {
    parameters: {
      query: {
        location_pk: number;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  location_medias_top_chunk_v1_location_medias_top_chunk_get: {
    parameters: {
      query: {
        location_pk: number;
        max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [components["schemas"]["Media"][], string | null];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  location_by_id_v1_location_by_id_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Location"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  location_guides_v1_v1_location_guides_get: {
    parameters: {
      query: {
        location_pk: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Guide"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  story_by_url_v2_story_by_url_get: {
    parameters: {
      query: {
        url: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "reel": {
           *         "id": 25025320,
           *         "strong_id__": "25025320",
           *         "latest_reel_media": 1775146773,
           *         "seen": 0,
           *         "can_reply": false,
           *         "can_reshare": true,
           *         "reel_type": "user_reel",
           *         "items": [
           *           {
           *             "pk": "3866000000000000000",
           *             "id": "3866000000000000000_25025320",
           *             "code": "DExample",
           *             "media_type": 1,
           *             "taken_at": 1775146773,
           *             "image_versions2": {
           *               "...": "..."
           *             },
           *             "user": {
           *               "pk": 25025320,
           *               "username": "instagram"
           *             },
           *             "expiring_at": 1775233173
           *           }
           *         ],
           *         "user": {
           *           "pk": 25025320,
           *           "username": "instagram",
           *           "full_name": "Instagram",
           *           "is_private": false,
           *           "is_verified": true,
           *           "profile_pic_url": "https://cdn.example.com/..."
           *         },
           *         "prefetch_count": 0,
           *         "expiring_at": 1775233173
           *       },
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  story_by_url_v1_story_by_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Story"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  story_by_id_v1_story_by_id_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Story"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  story_by_id_v2_story_by_id_get: {
    parameters: {
      query: {
        id: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "reel": {
           *         "id": 25025320,
           *         "strong_id__": "25025320",
           *         "latest_reel_media": 1775146773,
           *         "seen": 0,
           *         "can_reply": false,
           *         "can_reshare": true,
           *         "reel_type": "user_reel",
           *         "items": [
           *           {
           *             "pk": "3866000000000000000",
           *             "id": "3866000000000000000_25025320",
           *             "code": "DExample",
           *             "media_type": 1,
           *             "taken_at": 1775146773,
           *             "image_versions2": {
           *               "...": "..."
           *             },
           *             "user": {
           *               "pk": 25025320,
           *               "username": "instagram"
           *             },
           *             "expiring_at": 1775233173
           *           }
           *         ],
           *         "user": {
           *           "pk": 25025320,
           *           "username": "instagram",
           *           "full_name": "Instagram",
           *           "is_private": false,
           *           "is_verified": true,
           *           "profile_pic_url": "https://cdn.example.com/..."
           *         },
           *         "prefetch_count": 0,
           *         "expiring_at": 1775233173
           *       },
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  story_download_v1_story_download_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  story_download_by_url_v1_story_download_by_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  story_download_by_story_url_v1_story_download_by_story_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  highlight_by_id_v2_highlight_by_id_get: {
    parameters: {
      query: {
        id: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json":
            | components["schemas"]["PageResponse"]
            | {
                [key: string]: unknown;
              };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  highlight_by_url_v1_highlight_by_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Highlight"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  highlight_by_id_gql_highlight_by_id_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "data": {
           *         "xdt_api__v1__feed__reels_media__connection": {
           *           "edges": [
           *             {
           *               "node": {
           *                 "id": "highlight:18195781759377100",
           *                 "items": [
           *                   {
           *                     "id": "3975089864169193671_528817151",
           *                     "pk": "3975089864169193671",
           *                     "media_type": 2,
           *                     "product_type": "story"
           *                   }
           *                 ]
           *               }
           *             }
           *           ],
           *           "page_info": {
           *             "end_cursor": "highlight:18195781759377100",
           *             "has_next_page": false,
           *             "has_previous_page": false,
           *             "start_cursor": "highlight:18195781759377100"
           *           }
           *         }
           *       },
           *       "extensions": {
           *         "server_metadata": {
           *           "request_start_time_ms": 1791382071768,
           *           "time_at_flush_ms": 1791382072680
           *         },
           *         "is_final": true
           *       }
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  shop_about_v1_shop_about_get: {
    parameters: {
      query: {
        user_id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ShopInfo"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  shop_products_by_collection_chunk_v1_shop_products_by_collection_chunk_get: {
    parameters: {
      query: {
        encoded_collection_id: string;
        /** @description Use value of the second element of the previous response. The cursor is valid for 24 hours. */
        cursor?: string | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [
            components["schemas"]["ShopProduct"][],
            string | null,
          ];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  shop_storefront_v1_shop_storefront_get: {
    parameters: {
      query: {
        user_id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ShopStorefront"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  share_reel_by_url_v1_share_reel_by_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": string;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  share_by_code_v1_share_by_code_get: {
    parameters: {
      query: {
        code: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Share"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  share_by_url_v1_share_by_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  balance_sys_balance_get: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Balance"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  highlight_by_id_v1_highlight_by_id_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Highlight"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_comments_chunk_gql_comments_chunk_get: {
    parameters: {
      query: {
        media_id: string;
        sort_order?: ("recent" | "popular") | null;
        end_cursor?: string | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example [
           *       [
           *         {
           *           "pk": "18105432715897450",
           *           "user": {
           *             "...": "..."
           *           },
           *           "is_covered": false,
           *           "child_comment_count": 0,
           *           "has_liked_comment": false,
           *           "text": "❤️❤️❤️❤️",
           *           "created_at": 1775175316,
           *           "comment_like_count": 0,
           *           "__typename": "XDTCommentDict"
           *         },
           *         "... (14 more items)"
           *       ],
           *       "... (1 more items)"
           *     ]
           */
          "application/json": [
            {
              [key: string]: unknown;
            }[],
            string | null,
          ];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_medias_clips_chunk_v2_hashtag_medias_clips_get: {
    parameters: {
      query: {
        name: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fbsearch_top_v3_fbsearch_topsearch_get: {
    parameters: {
      query: {
        query: string;
        next_max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "stream_rows": [
           *         {
           *           "clear_client_cache": false,
           *           "client_hints": {
           *             "...": "..."
           *           },
           *           "status": "ok"
           *         },
           *         "... (2 more items)"
           *       ]
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fbsearch_reels_v3_fbsearch_reels_get: {
    parameters: {
      query: {
        query: string;
        reels_max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "reels_serp_modules": [
           *         {
           *           "module_type": "clips",
           *           "clips": [
           *             "..."
           *           ]
           *         }
           *       ],
           *       "has_more": true,
           *       "reels_max_id": "r:8dbadf9889174a4792854d3f59cb0057",
           *       "page_index": 11,
           *       "rank_token": "b790b05c-639f-4a2d-8cc3-29ce5e2c94ae",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_comments_gql_comments_get: {
    parameters: {
      query: {
        media_id: string;
        sort_order?: ("recent" | "popular") | null;
        amount?: number;
        max_requests?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example [
           *       [
           *         {
           *           "pk": "18105432715897450",
           *           "user": {
           *             "...": "..."
           *           },
           *           "is_covered": false,
           *           "child_comment_count": 0,
           *           "has_liked_comment": false,
           *           "text": "❤️❤️❤️❤️",
           *           "created_at": 1775175316,
           *           "comment_like_count": 0,
           *           "__typename": "XDTCommentDict"
           *         },
           *         "... (14 more items)"
           *       ],
           *       "... (1 more items)"
           *     ]
           */
          "application/json": {
            [key: string]: unknown;
          }[];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_comments_threaded_chunk_gql_comments_threaded_chunk_get: {
    parameters: {
      query: {
        media_id: string;
        comment_id: string;
        end_cursor?: string | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example [
           *       [
           *         {
           *           "pk": "18105432715897450",
           *           "user": {
           *             "...": "..."
           *           },
           *           "is_covered": false,
           *           "child_comment_count": 0,
           *           "has_liked_comment": false,
           *           "text": "❤️❤️❤️❤️",
           *           "created_at": 1775175316,
           *           "comment_like_count": 0,
           *           "__typename": "XDTCommentDict"
           *         },
           *         "... (14 more items)"
           *       ],
           *       "... (1 more items)"
           *     ]
           */
          "application/json": [
            {
              [key: string]: unknown;
            }[],
            string | null,
          ];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  comment_likers_gql_comment_likers_get: {
    parameters: {
      query: {
        media_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example [
           *       [
           *         {
           *           "id": "13277463868",
           *           "username": "example_user",
           *           "full_name": "Example User",
           *           "profile_pic_url": "https://cdn.example.com/...",
           *           "is_private": true,
           *           "is_verified": false,
           *           "followed_by_viewer": false,
           *           "requested_by_viewer": false
           *         },
           *         "... (49 more items)"
           *       ],
           *       "QVFEbzJ..."
           *     ]
           */
          "application/json": {
            [key: string]: unknown;
          }[];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_accounts_v2_search_accounts_get: {
    parameters: {
      query: {
        query: string;
        page_token?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "num_results": 20,
           *       "users": [
           *         {
           *           "strong_id__": "528817151",
           *           "fbid_v2": 17841401474538262,
           *           "pk": 528817151,
           *           "pk_id": "528817151",
           *           "is_verified_search_boosted": false,
           *           "search_serp_type": 3,
           *           "third_party_downloads_enabled": 1,
           *           "id": "528817151",
           *           "full_name": "NASA",
           *           "is_private": false,
           *           "is_verified": true,
           *           "profile_pic_id": "1735715738009579084_528817151",
           *           "profile_pic_url": "https://cdn.example.com/...",
           *           "username": "nasa",
           *           "account_badges": [
           *             "..."
           *           ],
           *           "...": "(11 more fields)"
           *         },
           *         "... (19 more items)"
           *       ],
           *       "has_more": true,
           *       "rank_token": "rank_token_value...",
           *       "clear_client_cache": false,
           *       "page_token": "9a8ac4dc95484777a37c6b412b140da4",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_top_v2_search_topsearch_get: {
    parameters: {
      query: {
        query: string;
        next_max_id?: string;
        rank_token?: string;
        reels_max_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "list": [
           *         {
           *           "position": 0,
           *           "user": {
           *             "...": "..."
           *           }
           *         },
           *         "... (1 more items)"
           *       ],
           *       "rank_token": "e3343f72-f8eb-4f6a-9258-400ac3c8dfd6",
           *       "clear_client_cache": false,
           *       "more_results_header": "Posts",
           *       "entity_results_header": "Accounts",
           *       "media_grid": {
           *         "refinements": {},
           *         "sections": [
           *           {
           *             "...": "..."
           *           },
           *           "... (3 more items)"
           *         ],
           *         "rank_token": "e3343f72-f8eb-4f6a-9258-400ac3c8dfd6",
           *         "next_max_id": "a8a28cb5a7804b6aaf431da977ce30b0",
           *         "has_more": true,
           *         "auto_load_more_enabled": true,
           *         "grid_post_click_experience": "contextual",
           *         "topic_status": -1,
           *         "reels_max_id": "r:b1713f1c3cbc4c8eb5c780f05543f87e",
           *         "has_more_reels": true,
           *         "reels_page_index": 3,
           *         "autoplay_type": "single"
           *       },
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_medias_v2_user_medias_get: {
    parameters: {
      query?: {
        /** @description Id of user account */
        user_id?: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_medias_chunk_v1_user_medias_chunk_get: {
    parameters: {
      query: {
        user_id: string;
        end_cursor?: string | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [components["schemas"]["Media"][], string | null];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_reels_v2_search_reels_get: {
    parameters: {
      query: {
        query: string;
        reels_max_id?: string;
        rank_token?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "reels_serp_modules": [
           *         {
           *           "module_type": "clips",
           *           "clips": [
           *             "..."
           *           ]
           *         }
           *       ],
           *       "has_more": true,
           *       "reels_max_id": "r:72817d134a134e1aa5d7ec6e8290e978",
           *       "page_index": 11,
           *       "rank_token": "e717651f-d8db-4e43-895b-b0cedf6bcc2d",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  search_places_v2_search_places_get: {
    parameters: {
      query: {
        query: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "items": [
           *         {
           *           "location": {
           *             "...": "..."
           *           },
           *           "title": "New York",
           *           "subtitle": "3.1mi"
           *         },
           *         "... (29 more items)"
           *       ],
           *       "has_more": false,
           *       "rank_token": "rank_token_value...",
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  fbsearch_topsearch_v1_fbsearch_topsearch_get: {
    parameters: {
      query: {
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            [key: string]: unknown;
          }[];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  web_profile_info_v1_user_web_profile_info_get: {
    parameters: {
      query: {
        username: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  related_profiles_gql_user_related_profiles_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserShort"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_followers_g1_user_followers_get: {
    parameters: {
      query: {
        user_id: string;
        end_cursor?: string | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (followers) with end_cursor */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [
            components["schemas"]["UserShortWithReel"][],
            string | null,
          ];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_following_g1_user_following_get: {
    parameters: {
      query: {
        user_id: string;
        end_cursor?: string | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (following) with end_cursor */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [
            components["schemas"]["UserShort"][],
            string | null,
          ];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_comments_threaded_gql_comments_threaded_get: {
    parameters: {
      query: {
        media_id: string;
        comment_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example [
           *       [
           *         {
           *           "pk": "18105432715897450",
           *           "user": {
           *             "...": "..."
           *           },
           *           "is_covered": false,
           *           "child_comment_count": 0,
           *           "has_liked_comment": false,
           *           "text": "❤️❤️❤️❤️",
           *           "created_at": 1775175316,
           *           "comment_like_count": 0,
           *           "__typename": "XDTCommentDict"
           *         },
           *         "... (14 more items)"
           *       ],
           *       "... (1 more items)"
           *     ]
           */
          "application/json": {
            [key: string]: unknown;
          }[];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_by_id_gql_user_by_id_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_by_username_gql_user_by_username_get: {
    parameters: {
      query: {
        username: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_followers_gql_user_followers_get: {
    parameters: {
      query: {
        user_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (followers) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserShort"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_following_gql_user_following_get: {
    parameters: {
      query: {
        user_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (following) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserShort"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_medias_clips_v1_hashtag_medias_clips_get: {
    parameters: {
      query: {
        /**
         * @description Please make sure to use a clean hashtag without any special symbols.
         *
         *     **Good one**: love, sea, dog, 공구
         *
         *     **Bad one**: #dog, sea_., tanjung.., #공구.
         */
        name: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_medias_recent_v1_hashtag_medias_recent_get: {
    parameters: {
      query: {
        /**
         * @description Please make sure to use a clean hashtag without any special symbols.
         *
         *     **Good one**: love, sea, dog, 공구
         *
         *     **Bad one**: #dog, sea_., tanjung.., #공구.
         */
        name: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_medias_recent_chunk_v1_hashtag_medias_recent_chunk_get: {
    parameters: {
      query: {
        /**
         * @description Please make sure to use a clean hashtag without any special symbols.
         *
         *     **Good one**: love, sea, dog, 공구
         *
         *     **Bad one**: #dog, sea_., tanjung.., #공구.
         */
        name: string;
        max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [components["schemas"]["Media"][], string | null];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_medias_top_v1_hashtag_medias_top_get: {
    parameters: {
      query: {
        /**
         * @description Please make sure to use a clean hashtag without any special symbols.
         *
         *     **Good one**: love, sea, dog, 공구
         *
         *     **Bad one**: #dog, sea_., tanjung.., #공구.
         */
        name: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  hashtag_medias_top_recent_chunk_v1_hashtag_medias_top_recent_chunk_get: {
    parameters: {
      query: {
        /**
         * @description Please make sure to use a clean hashtag without any special symbols.
         *
         *     **Good one**: love, sea, dog, 공구
         *
         *     **Bad one**: #dog, sea_., tanjung.., #공구.
         */
        name: string;
        max_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [components["schemas"]["Media"][], string | null];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_comments_v1_media_comments_get: {
    parameters: {
      query: {
        id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of comments */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Comment"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  photo_download_v1_media_download_photo_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  photo_download_by_url_v1_media_download_photo_by_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  video_download_v1_media_download_video_get: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  video_download_by_url_v1_media_download_video_by_url_get: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_clips_v1_user_clips_get: {
    parameters: {
      query: {
        user_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of clips */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_followers_v1_user_followers_get: {
    parameters: {
      query: {
        user_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (followers) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserShort"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_following_v1_user_following_get: {
    parameters: {
      query: {
        user_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (followings) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserShort"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_guides_v1_v1_user_guides_get: {
    parameters: {
      query: {
        user_id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Guide"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_medias_v1_user_medias_get: {
    parameters: {
      query: {
        user_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of medias */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  usertag_medias_v1_user_tag_medias_get: {
    parameters: {
      query: {
        user_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_videos_v1_user_videos_get: {
    parameters: {
      query: {
        user_id: string;
        amount?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of videos */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Media"][];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_videos_chunk_v1_user_videos_chunk_get: {
    parameters: {
      query: {
        user_id: string;
        end_cursor?: string | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": [components["schemas"]["Media"][], string | null];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_by_code_v2_media_by_code_get: {
    parameters: {
      query: {
        code: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "num_results": 1,
           *       "more_available": false,
           *       "items": [
           *         {
           *           "strong_id__": "3162273595027945978_123123",
           *           "id": "3162273595027945978_123123",
           *           "fbid": 17975970359404748,
           *           "deleted_reason": 0,
           *           "client_cache_key": "MzE2MjI3MzU5NTAyNzk0NTk3OA==.3",
           *           "integrity_review_decision": "pending",
           *           "pk": 3162273595027946000,
           *           "has_delayed_metadata": false,
           *           "mezql_token": "",
           *           "should_request_ads": false,
           *           "has_privately_liked": false,
           *           "is_quiet_post": false,
           *           "collaborator_edit_eligibility": false,
           *           "share_count_disabled": false,
           *           "is_visual_reply_commenter_notice_enabled": true,
           *           "...": "(96 more fields)"
           *         }
           *       ],
           *       "auto_load_more_enabled": true,
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_by_id_v2_media_by_id_get: {
    parameters: {
      query: {
        id: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "num_results": 1,
           *       "more_available": false,
           *       "items": [
           *         {
           *           "strong_id__": "3162273595027945978_123123",
           *           "id": "3162273595027945978_123123",
           *           "fbid": 17975970359404748,
           *           "deleted_reason": 0,
           *           "client_cache_key": "MzE2MjI3MzU5NTAyNzk0NTk3OA==.3",
           *           "integrity_review_decision": "pending",
           *           "pk": 3162273595027946000,
           *           "has_delayed_metadata": false,
           *           "mezql_token": "",
           *           "should_request_ads": false,
           *           "has_privately_liked": false,
           *           "is_quiet_post": false,
           *           "collaborator_edit_eligibility": false,
           *           "share_count_disabled": false,
           *           "is_visual_reply_commenter_notice_enabled": true,
           *           "...": "(96 more fields)"
           *         }
           *       ],
           *       "auto_load_more_enabled": true,
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  media_by_url_v2_media_by_url_get: {
    parameters: {
      query: {
        url: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          /**
           * @example {
           *       "num_results": 1,
           *       "more_available": false,
           *       "items": [
           *         {
           *           "strong_id__": "3162273595027945978_123123",
           *           "id": "3162273595027945978_123123",
           *           "fbid": 17975970359404748,
           *           "deleted_reason": 0,
           *           "client_cache_key": "MzE2MjI3MzU5NTAyNzk0NTk3OA==.3",
           *           "integrity_review_decision": "pending",
           *           "pk": 3162273595027946000,
           *           "has_delayed_metadata": false,
           *           "mezql_token": "",
           *           "should_request_ads": false,
           *           "has_privately_liked": false,
           *           "is_quiet_post": false,
           *           "collaborator_edit_eligibility": false,
           *           "share_count_disabled": false,
           *           "is_visual_reply_commenter_notice_enabled": true,
           *           "...": "(96 more fields)"
           *         }
           *       ],
           *       "auto_load_more_enabled": true,
           *       "status": "ok"
           *     }
           */
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_followers_v2_user_followers_get: {
    parameters: {
      query?: {
        /** @description Id of user account */
        user_id?: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
        /** @description Convert all big integers to strings */
        safe_int?: boolean | null;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description List of users (followers) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  user_videos_v2_user_videos_get: {
    parameters: {
      query?: {
        /** @description Id of user account */
        user_id?: string;
        /** @description Use value of field `next_page_id` from response for getting next page */
        page_id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PageResponse"];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
}
