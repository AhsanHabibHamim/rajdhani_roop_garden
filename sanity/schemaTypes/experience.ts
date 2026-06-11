import { defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'duration', title: 'Duration', type: 'string' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'maxGuests', title: 'Max Guests', type: 'number' },
    { name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }] },
    { name: 'ctaText', title: 'CTA Text', type: 'string' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
  ],
})
