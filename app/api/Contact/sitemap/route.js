import { NextResponse } from "next/server";


const PAGES = [
  "/home",
  "/about",
  "/signboards",
  "/services",
  "/contact",
  "/stickers",
    "/led",
    "/branding",
     "/signboards/nameplate-signboard",
    "/signboards/led-signboard",
    "/signboards/outdoor-signboard",
    "/signboards/direction-signboard",
    "/signboards/indoor-signboard",
    "/signboards/flexible-led-signboard",
    "/signboards/3d-signboard",
    "/signboards/rooftop-signboard",
    "/signboards/digital-signboard",
    "/stickers/sticker",
    "/stickers/vehicle-stickers",
    "/stickers/full-wrapping",
    "/stickers/ppf",
    "/stickers/onevision",
    "/stickers/frosted",
    "/led/indoor-led",
    "/led/outdoor-led",
    "/led/flexible-led",
    "/led/digital-led",
    "/branding/vehicle-branding",
    "/branding/van-sticker-branding",
    "/branding/building-ss-plate-nameplate",
    "/branding/shop-front-branding",
    "/branding/vehicle-branding",
    
];



export async function GET() {
  const baseUrl = "https://www.qamaradv-uae.com";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`
  ).join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
