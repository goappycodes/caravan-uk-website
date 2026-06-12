import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.domain, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.domain}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.domain}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.domain}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.domain}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.domain}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
