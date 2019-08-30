## Description

Test repo to demonstrate localization bug with `gatsby-plugin-manifest`.

Netlify demo: https://affectionate-franklin-dc4bfb.netlify.com

Tracking issue: https://github.com/gatsbyjs/gatsby/issues/17255

## Reproduction steps

1. Navigate to the Netlify demo (or run `gatsby build && gatsby serve` on the test repo)
2. Open DevTools and confirm that the manifest in `<head>` is `manifest-en.webmanifest` as expected.
3. Click on the "Spanish" link to navigate to `/es/`.
4. See that the manifest is still `manifest-en.webmanifest` rather than `manifest-es.webmanifest`.

Notes:

In production builds (`gatsby build && gatsby serve`), the correct manifest is loaded when the localized page is the initial page or if you refresh on it.

In development builds (`gatsby develop`), the correct manifest is never loaded, regardless of whether you refresh or not.
