// lib/sanity.ts
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  apiVersion: '2025-01-31', // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);