export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: {
        hotspot: false,
      },
    },
    {
      name: 'demourl',
      title: 'DemoUrl',
      type: 'string',
    },
    {
      name: 'giturl',
      title: 'GitUrl',
      type: 'string',
    },
  ],
}
