import { defineType } from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'caption', title: 'Caption', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
  ],
})
