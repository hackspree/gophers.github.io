# Repository Specs

## User-facing behavior

- The site serves a single landing page at the repository root.
- The landing page shows the local `logo.png` image centered in the viewport.
- The logo scales down on smaller screens without overflowing the viewport.
- The page uses a plain background and no other visible content.
- The document typography is limited to the local `jikitourai.regular` and `Ioskeley` font families.

## Implementation rules

- Keep the site static and dependency-free.
- Implement the landing page with root-level files suitable for GitHub Pages.
- Reference the logo through a relative path so the root page can load it directly.
- Define local `@font-face` rules for `jikitourai.regular` and `Ioskeley`.
- Limit page `font-family` declarations to those two font family names.
- Center the logo with CSS layout rules rather than fixed positioning.

## Constraints and invariants

- Preserve the existing custom domain configuration in `CNAME`.
- Do not require JavaScript for the landing page.
- Keep the logo asset as a local file in the repository root.
- Keep the required font assets as local files in the repository root.
