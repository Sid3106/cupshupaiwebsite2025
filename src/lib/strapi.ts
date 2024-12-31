import { Strapi } from '@strapi/sdk-js';

const strapi = new Strapi({
  url: import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337',
  prefix: '/api',
  store: {
    key: 'strapi_jwt',
    useLocalStorage: true,
    cookieOptions: { path: '/' },
  },
  axiosOptions: {},
});

export default strapi;