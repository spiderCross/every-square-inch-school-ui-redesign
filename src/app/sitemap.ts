import type { MetadataRoute } from "next";
import { company } from "@/lib/site";
import { programmeDetails } from "@/lib/programmes";
import { resources } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/why-every-square-inch",
    "/programmes",
    "/destinations",
    "/safety-student-wellbeing",
    "/resources",
    "/corporate",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];
  return [
    ...staticPaths.map((path) => ({
      url: `${company.canonicalHost}${path}`,
    })),
    ...programmeDetails.map((item) => ({
      url: `${company.canonicalHost}/programmes/${item.slug}`,
    })),
    ...resources.map((item) => ({
      url: `${company.canonicalHost}/resources/${item.slug}`,
    })),
  ];
}
