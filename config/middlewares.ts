import type { Core } from '@strapi/strapi';

export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:', '*'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', '*'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', '*'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'http://localhost:5173',
        'http://localhost:1337',
        'https://dev1.churchmove.com',
        '*'
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
