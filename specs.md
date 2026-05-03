# Repository Specs

## User-facing behavior

- The site serves a single landing page at the repository root.
- The landing page shows the local logo image centered in the viewport.
- The logo scales down on smaller screens without overflowing the viewport.
- The page uses a plain background with a subtle rounded install command area for `curl -fsSL https://gophers.hackspree.com/install.sh | bash`, a visible Font Awesome copy icon for that command, and Discord plus GitHub icon links beneath the logo.
- Font Awesome icons use a light grey default color, turn black on hover, and share the same rendered size.
- The logo, install command area, and icon row use balanced spacing and sizing so the hero feels cohesive.
- The logo remains prominent while staying visually proportional to the install command area and icon row.
- The browser tab uses a local favicon from the site assets.
- The document typography is limited to the local `Ioskeley` and `jikitourai.regular` font families, with `Ioskeley` as the primary face.

## Implementation rules

- Keep the site static, with only minimal local JavaScript for the install-command copy button.
- Implement the landing page with root-level files suitable for GitHub Pages.
- Keep the sample installer script at `install.sh` in the repository root so it is served from `/install.sh`.
- Keep shared styling in `assets/css/site.css`.
- Keep copy-button behavior in `assets/js/site.js`.
- Store image assets under `assets/images/` and font assets under `assets/fonts/`.
- Load the current dedicated local favicon assets from `assets/favicons/` in the root page head.
- Reference the logo and fonts through relative paths from the root page.
- Embed the Font Awesome Discord icon as inline SVG in the page markup.
- Embed the Font Awesome GitHub icon as inline SVG in the page markup.
- Embed the Font Awesome copy icon as inline SVG in the install command control.
- Style Font Awesome icons with a neutral grey-to-black hover palette.
- Keep all Font Awesome icons at the same rendered size.
- Use shared spacing and sizing tokens in CSS so the hero elements stay visually consistent.
- Define local `@font-face` rules for `jikitourai.regular` and `Ioskeley`.
- Limit page `font-family` declarations to those two font family names, with `Ioskeley` listed first.
- Center the logo and Discord link with CSS layout rules rather than fixed positioning.
- Present the install command as a rounded copy/paste-ready call-to-action that wraps cleanly without scrollbars.
- Pair the install command with a visible icon control that copies the exact command string.
- Keep the install command container visually soft and low-contrast against the page background while sizing it to the command content and avoiding command scrollbars.
- Balance the logo size, command CTA, and icon row so none of them visually overwhelm the others.

## Constraints and invariants

- Preserve the existing custom domain configuration in `CNAME`.
- Keep the landing page functional without JavaScript, while using JavaScript to enhance the copy button.
- Keep the logo asset as a local file under `assets/images/`.
- Keep the required font assets as local files under `assets/fonts/`.
- Keep the Discord icon inline so the page does not require external asset hosts.
- Keep the GitHub icon inline so the page does not require external asset hosts.
- Keep `install.sh` as a simple sample script that currently outputs `hello gophers`.
