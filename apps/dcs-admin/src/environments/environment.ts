import { Environment } from '@dcs-libs/shared';

export const environment = {
  apiUrl: 'http://localhost:1337/',
  graphqlUrl: 'http://localhost:1337/graphql',
  podcastApiUrl: 'http://localhost:4500/podcasts',
  siteUrl: 'http://localhost:4202',
  siteDashboardUrl: 'http://localhost:4202/dashboard',
  production: false,
  local: true,
  githubClientId: 'f38efc18b8d63221e637',
  isDashboard: true
} as Environment;
