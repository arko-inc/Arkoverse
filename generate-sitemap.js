import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define your website URL
const baseUrl = "https://arkoverse.vercel.app";

// Define your routes from App.jsx
const routes = [
  "/", // Home Page
  "/aboutme", // About Me Page
  "/projects", // Projects Page
  "/projects/toddy", // Toddy Project Page
  "/projects/project1", // Project 1 Page
  "/contact", // Contact Page
];

// Generate the XML structure
const generateSitemap = () => {
  const urls = routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

// Get the directory name (required for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Write the sitemap to the public folder
const sitemap = generateSitemap();
const sitemapPath = path.resolve(__dirname, "public", "sitemap.xml");

fs.writeFileSync(sitemapPath, sitemap, "utf8");

console.log("Sitemap generated successfully at:", sitemapPath);
