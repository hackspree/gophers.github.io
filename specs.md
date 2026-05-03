# Repository Specs

## User-facing behavior

- The site serves a single landing page at the repository root.
- The landing page shows the local logo image centered in the viewport.
- The logo scales down on smaller screens without overflowing the viewport.
- The page uses a plain background and no other visible content.
- The document typography is limited to the local `Ioskeley` and `jikitourai.regular` font families, with `Ioskeley` as the primary face.

## Implementation rules

- Keep the site static and dependency-free.
- Implement the landing page with root-level files suitable for GitHub Pages.
- Keep shared styling in `assets/css/site.css`.
- Store image assets under `assets/images/` and font assets under `assets/fonts/`.
- Reference the logo and fonts through relative paths from the root page.
- Define local `@font-face` rules for `jikitourai.regular` and `Ioskeley`.
- Limit page `font-family` declarations to those two font family names, with `Ioskeley` listed first.
- Center the logo with CSS layout rules rather than fixed positioning.

## Constraints and invariants

- Preserve the existing custom domain configuration in `CNAME`.
- Do not require JavaScript for the landing page.
- Keep the logo asset as a local file under `assets/images/`.
- Keep the required font assets as local files under `assets/fonts/`.
