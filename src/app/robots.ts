import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/staging", "/preview", "/draft"] },
    ],
    sitemap: `${company.canonicalHost}/sitemap.xml`,
    host: company.canonicalHost,
  };
}
