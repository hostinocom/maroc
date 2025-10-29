// app/sitemap.ts
import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export const dynamic = "force-static"; // Keep this

interface RouteInfo {
  route: string;
  filePath: string;
}

function getAppRoutes(dir: string, baseDir: string = dir): RouteInfo[] {
  const routes: RouteInfo[] = [];
  const excludeDirs = ["api", "components", "lib", "utils"];

  try {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      if (excludeDirs.includes(file)) continue;

      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        routes.push(...getAppRoutes(filePath, baseDir));
      } else if (
        file === "page.tsx" ||
        file === "page.ts" ||
        file === "page.js"
      ) {
        const relativePath = path.relative(baseDir, dir);
        let route =
          "/" +
          relativePath
            .replace(/\\/g, "/")
            .replace(/\(.*?\)/g, "")
            .replace(/\[\.\.\..*?\]/g, "")
            .replace(/\[.*?\]/g, ":dynamic")
            .replace(/\/+/g, "/");

        if (!route.includes(":dynamic")) {
          routes.push({
            route: route === "/" ? "/" : route,
            filePath: filePath,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error reading directory:", error);
  }

  return routes;
}

function getFileModifiedDate(filePath: string): Date {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (error) {
    return new Date();
  }
}


const verifyPages = (route: string) => {
  const routes = [
    "/",
    "/agence-seo-maroc",
    "/nom-de-domaine-ma",
    "/email-professionnel",
    "/google-my-business-maroc",
    "/google-ads-maroc",
    "/creation-site-web-maroc"
  ];

  const routes_less_priority = [
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
    "/conditions-generales",
    "/politique-cookies",
    "/abus",
    "/paiments",
  ];
  if (routes.includes(route)) {
    return 1;
  } else if(routes_less_priority.includes(route)) {
    return 0.1;
  } else {
    return 0.9;
  }
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hostino.ma";
  const appDir = path.join(process.cwd(), "app");

  const routeInfos = getAppRoutes(appDir);
  const uniqueRoutes = Array.from(
    new Map(routeInfos.map((item) => [item.route, item])).values()
  );

  const staticPages = uniqueRoutes.map(({ route, filePath }) => ({
    url: `${baseUrl}${route}`,
    lastModified: getFileModifiedDate(filePath),
    changeFrequency: "weekly" as const,

    priority: verifyPages(route),
  }));

  return staticPages;
}
