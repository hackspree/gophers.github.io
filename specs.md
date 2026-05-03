# Repository Specs

## User-facing behavior

- The site serves a single landing page at the repository root.
- The landing page shows the local logo image centered in the viewport.
- The logo scales down on smaller screens without overflowing the viewport.
- The page uses a plain background with the install command `curl -fsSL https://gophers.hackspree.com/install.sh | bash` and a Discord icon link beneath the logo.
- Font Awesome icons use a light grey default color and turn black on hover.
- The document typography is limited to the local `Ioskeley` and `jikitourai.regular` font families, with `Ioskeley` as the primary face.

## Implementation rules

- Keep the site static and dependency-free.
- Implement the landing page with root-level files suitable for GitHub Pages.
- Keep the sample installer script at `install.sh` in the repository root so it is served from `/install.sh`.
- Keep shared styling in `assets/css/site.css`.
- Store image assets under `assets/images/` and font assets under `assets/fonts/`.
- Reference the logo and fonts through relative paths from the root page.
- Embed the Font Awesome Discord icon as inline SVG in the page markup.
- Style Font Awesome icons with a neutral grey-to-black hover palette.
- Define local `@font-face` rules for `jikitourai.regular` and `Ioskeley`.
- Limit page `font-family` declarations to those two font family names, with `Ioskeley` listed first.
- Center the logo and Discord link with CSS layout rules rather than fixed positioning.
- Present the install command as copy/paste-ready text within the centered landing page stack.

## Constraints and invariants

- Preserve the existing custom domain configuration in `CNAME`.
- Do not require JavaScript for the landing page.
- Keep the logo asset as a local file under `assets/images/`.
- Keep the required font assets as local files under `assets/fonts/`.
- Keep the Discord icon inline so the page does not require external asset hosts.
- Keep `install.sh` as a simple sample script that currently outputs `hello gophers`.
