# Image Asset Specs

## User-facing behavior

- The landing page logo is served from this directory.
- The browser tab favicon is served from this directory.

## Implementation rules

- Store the landing page logo as `logo.png`.
- Reuse `logo.png` as the local favicon source unless a dedicated favicon asset is added later.

## Constraints and invariants

- Keep the logo as a local PNG asset.
