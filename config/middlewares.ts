import type { Core } from '@strapi/strapi';

<<<<<<< HEAD
const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
=======
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
>>>>>>> ac1b6f53d0afadfd17d0800b468bb9d0330c4482
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
<<<<<<< HEAD

export default config;
=======
>>>>>>> ac1b6f53d0afadfd17d0800b468bb9d0330c4482
