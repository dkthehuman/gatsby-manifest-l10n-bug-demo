## Description

Test repo to demonstrate localization bug with `gatsby-plugin-manifest`.

## Reproduction steps

1. Run `gatsby build && gatsby serve` to serve a production site
2. Open DevTools and confirm that the manifest in `<head>` is `manifest-en.webmanifest` as expected.
3. Click on the "Spanish" link to navigate to `/es/`.
4. See that the manifest is still `manifest-en.webmanifest` rather than `manifest-es.webmanifest`.

Notes:

- When the localized page is loaded as the initial page or if you refresh on it, the correct manifest is loaded. (In development mode, the correct manifest is never loaded, regardless of whether you refresh or not.)
