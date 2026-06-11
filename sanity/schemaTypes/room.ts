import { defineType } from 'sanity'

export default defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    { name: 'image', title: 'Main Image', type: 'image' },
    { name: 'gallery', title: 'Gallery Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'description', title: 'Short Description', type: 'text' },
    { name: 'fullDescription', title: 'Full Description', type: 'text' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'maxGuests', title: 'Max Guests', type: 'number' },
    { name: 'bedType', title: 'Bed Type', type: 'string' },
    { name: 'amenities', title: 'Amenities', type: 'array', of: [{ type: 'string' }] },
    { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
    { name: 'size', title: 'Size (sqm)', type: 'number' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
  ],
})
