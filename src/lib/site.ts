// Vercel sets VERCEL_PROJECT_PRODUCTION_URL (host only, no protocol) on every deployment.
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined;

export const siteConfig = {
  name: "Dawson Wells Gallery",
  shortName: "Dawson Wells",
  description: "A contemporary art gallery collection and editorial archive.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? vercelProductionUrl ?? "http://localhost:3500",
  contact: {
    email: null,
    phone: null,
    address: null,
    hours: null,
  },
};
