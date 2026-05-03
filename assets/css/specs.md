# CSS Asset Specs

## User-facing behavior

- The landing page styling in this directory supports the centered logo, install command, and Discord/GitHub link layout.

## Implementation rules

- Store the landing page stylesheet as `site.css`.
- Keep asset URLs relative to the stylesheet location.
- Style the install command as a subtle rounded hero call-to-action in the landing page stack.
- Style the Discord and GitHub icon links as part of the centered landing page stack.
- Use a light grey default icon color that shifts to black on hover and focus.
- Keep the non-logo controls visually large while rendering the curl command text at a much smaller size within its CTA.
- Keep the copy icon visually integrated into the install command area.
- Let the curl command wrap inside the CTA instead of showing scrollbars.

## Constraints and invariants

- Keep the stylesheet static and free of JavaScript requirements.
