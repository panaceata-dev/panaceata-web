import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://panaceata.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/blog",
    "/careers",
    "/contact",
    "/products",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "/blog" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1.0 : route === "/services" ? 0.9 : 0.8,
  }));

  return routes;
}
