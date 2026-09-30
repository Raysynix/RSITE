# RAYSYNIX Website v2

This build uses the newly supplied Canva desktop and mobile designs as the visual source of truth.

## Improvements in this version
- Fixed/stationary header on desktop and mobile.
- All CTA buttons work on mobile and desktop and link only to `https://t.me/Raysynix`.
- FAQ rebuilt as a real accessible accordion (no blank white blocks).
- High-density mobile images included (`@3x`) for sharper rendering on Retina/high-DPI phones.
- High-density desktop images included (`@2x`).
- Below-the-fold images lazy-load for better performance.
- Layout is centered and capped to the original Canva width so the design does not stretch/distort on large screens.
- Mobile and desktop assets switch automatically at 767px.

## GitHub / Cloudflare update
Replace the old repository contents with the contents of this folder, keeping `index.html` at repository root.
Cloudflare's existing Git deployment should automatically redeploy after you commit the changes.
