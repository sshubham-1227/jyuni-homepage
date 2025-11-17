import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jyuni.com";

  return [
    {
      url: baseUrl,
      lastModified: "2025-10-16",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: "2025-10-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: "2025-10-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-a-demo`,
      lastModified: "2025-10-16",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://app.jyuni.com/signup",
      lastModified: "2025-10-16",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://app.jyuni.com/login",
      lastModified: "2025-10-16",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
