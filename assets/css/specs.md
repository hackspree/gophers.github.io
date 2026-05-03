# CSS Asset Specs

## User-facing behavior

- The landing page styling in this directory supports the centered logo, install command, and Discord/GitHub link layout.

## Implementation rules

- Store the landing page stylesheet as `site.css`.
- Keep asset URLs relative to the stylesheet location.
- Style the install command as a subtle rounded hero call-to-action in the landing page stack.
- Style the Discord and GitHub icon links as part of the centered landing page stack.
- Use a light grey default icon color that shifts to black on hover and focus.
- Keep all Font Awesome icons at the same rendered size.
- Balance the logo spacing, CTA sizing, and icon row spacing so the hero reads as one designed unit.
- Keep the copy icon visually integrated into the install command area.
- Let the curl command wrap inside the CTA instead of showing scrollbars.
- Use shared spacing and sizing tokens where practical to keep the layout consistent.

## Constraints and invariants

- Keep the stylesheet static and free of JavaScript requirements.
