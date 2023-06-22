export default {
  name: 'tools',
  title: 'Tools',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'mySortOrder',
      title: 'My Sort Order',
      type: 'number',
    },
  ],

  orderings: [
    {
      title: 'My Sort Order',
      name: 'mySortOrderDesc',
      by: [{field: 'mySortOrder', direction: 'desc'}],
    },
  ],
}
