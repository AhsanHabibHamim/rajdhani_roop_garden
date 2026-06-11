import { defineType } from 'sanity'

export default defineType({
  name: 'dining',
  title: 'Dining Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Page Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'heroImage', title: 'Hero Image', type: 'image' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Name', type: 'string' },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: { source: 'title', maxLength: 96 },
            },
            { name: 'image', title: 'Image', type: 'image' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'cuisine', title: 'Cuisine', type: 'string' },
            { name: 'openingHours', title: 'Opening Hours', type: 'string' },
            { name: 'specialDishes', title: 'Special Dishes', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    },
    {
      name: 'menuCategories',
      title: 'Menu Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Category Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Item Name', type: 'string' },
                    { name: 'description', title: 'Description', type: 'text' },
                    { name: 'price', title: 'Price', type: 'number' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { name: 'gallery', title: 'Gallery Images', type: 'array', of: [{ type: 'image' }] },
  ],
})
