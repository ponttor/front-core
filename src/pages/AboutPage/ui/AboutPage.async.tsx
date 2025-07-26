import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    // not for production use, just for demonstration
    // Simulating a delay to mimic code splitting
    // and loading the component asynchronously
    setTimeout(() => resolve(import('./AboutPage')), 1500);
  }),
);
