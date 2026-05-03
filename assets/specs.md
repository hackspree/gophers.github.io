# Assets Directory Specs

## User-facing behavior

- Assets in this directory support the landing page without changing the page URL structure.

## Implementation rules

- Keep shared CSS in `assets/css/`.
- Keep shared JavaScript in `assets/js/`.
- Keep image assets in `assets/images/`.
- Keep font assets in `assets/fonts/`.
- Use stable file names so the root page can reference assets predictably.

## Constraints and invariants

- Keep all assets local to the repository.
- Do not place page-entry HTML files in this directory.
