import { defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'coverImage', title: 'Cover Image', type: 'image' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
  ],
})
