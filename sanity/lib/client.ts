import { createClient } from 'next-sanity'

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pyb3p0pg',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-06-01',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(sanityConfig)
export default sanityClient
