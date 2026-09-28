# Shadow Operating — Static Landing Page

A responsive HTML/CSS/JavaScript landing page based on the Digital Product Shadow Operating framework.

## Files
- `index.html` — page structure and copy
- `styles.css` — responsive premium editorial design
- `script.js` — mobile navigation, reveal animations and year
- `assets/` — place logo/images here

## Before publishing
1. Replace `hello@yourdomain.com` in `index.html` with your real application email/form URL.
2. Replace the `SHADOW OPERATING` text/mark if you have a final brand identity.
3. Add your final social sharing image as `assets/og-image.jpg`.
4. Optionally replace Google Fonts with locally hosted fonts if desired.
5. Test the page on mobile and desktop.

## Cloudflare Pages
Recommended flow:
GitHub repository → Cloudflare Dashboard → Workers & Pages → Create application → Pages → connect repository → production branch `main` → framework preset `None` → static build configuration → Deploy.

If `index.html` is at repository root, use the root as the output location according to the current Cloudflare Pages static HTML configuration. If you move the site into `public/`, set the output directory to `public`.

## Application
The CTA currently opens:
`mailto:hello@yourdomain.com?subject=Product%20Opportunity%20Audit`

For a production launch, replace this with your actual application form URL or a Cloudflare Pages Function endpoint.
