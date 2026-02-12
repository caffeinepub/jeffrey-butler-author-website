# Specification

## Summary
**Goal:** Replace the placeholder "Torment" book cover and the About page author portrait with the user-provided images.

**Planned changes:**
- Add the uploaded cover image (`image.png`) and author portrait (`Jeffrey Butler profile image.png`) to the frontend as static assets under a stable public path (e.g., `frontend/public/assets/uploads/`) using normalized, web-safe kebab-case filenames.
- Update `frontend/src/content/siteContent.ts` so the book entry with id `torment` points to the new cover asset path.
- Update `frontend/src/content/siteContent.ts` so the About page portrait points to the new author image asset path.
- Keep the second book (“coming-soon”) cover image unchanged (continue using the existing placeholder) unless a second uploaded cover asset is present and explicitly wired.

**User-visible outcome:** The Home and Books pages display the updated "Torment" cover, and the About page displays the updated author portrait, with no broken image links.
