import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/programs", destination: "/programmes", permanent: true },
      {
        source: "/safety",
        destination: "/safety-student-wellbeing",
        permanent: true,
      },
      { source: "/services", destination: "/resources", permanent: true },
      { source: "/visa-services", destination: "/resources", permanent: true },
      {
        source: "/global-education-support",
        destination: "/resources",
        permanent: true,
      },
      { source: "/parent-zone", destination: "/resources", permanent: true },
      { source: "/teacher-zone", destination: "/resources", permanent: true },
      { source: "/student-zone", destination: "/resources", permanent: true },
    ];
  },
};

export default nextConfig;
