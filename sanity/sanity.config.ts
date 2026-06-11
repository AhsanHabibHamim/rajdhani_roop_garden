import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemaTypes from './schemaTypes'

export default defineConfig({
  name: 'rajdhani-roop-studio',
  title: 'Rajdhani Roop Garden Resort Studio',
  projectId:
    process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pyb3p0pg',
  dataset:
    process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
