# Repository Specs

## User-facing behavior

- The site serves a single landing page at the repository root.
- The landing page shows the local `logo.png` image centered in the viewport.
- The logo scales down on smaller screens without overflowing the viewport.
- The page uses a plain background and no other visible content.

## Implementation rules

- Keep the site static and dependency-free.
- Implement the landing page with root-level files suitable for GitHub Pages.
- Reference the logo through a relative path so the root page can load it directly.
- Center the logo with CSS layout rules rather than fixed positioning.

## Constraints and invariants

- Preserve the existing custom domain configuration in `CNAME`.
- Do not require JavaScript for the landing page.
- Keep the logo asset as a local file in the repository root.
