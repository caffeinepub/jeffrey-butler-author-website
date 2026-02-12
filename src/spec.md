# Specification

## Summary
**Goal:** Fix broken image links across the author site and ensure graceful fallbacks when images fail to load.

**Planned changes:**
- Update image paths in site content/config so hero background, book covers, and author portrait reference existing static files with exact filename/case matches under `frontend/public`.
- Verify images render correctly on `/`, `/books`, and `/about` with no missing assets in production.
- Add runtime image fallback behavior for book covers and the author portrait to swap to an existing local placeholder on load error (without causing infinite `onError` loops).

**User-visible outcome:** Home, Books, and About pages display all images correctly, and if any cover/portrait fails to load, a local placeholder image is shown instead of a broken image icon.
