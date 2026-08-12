import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fastgamingbd.com';

  const routes = ['', '/download', '/fastgamingbdapk', '/terms', '/privacy', '/rules', '/about', '/contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/fastgamingbdapk' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/download' || route === '/fastgamingbdapk' ? 0.9 : 0.8,
  }));
}
