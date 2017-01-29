block('state')(
  attrs()(''),
  content()(function(node, ctx) {
    return [
      {
        elem: 'image'
      },
      {
        elem: 'content',
        content: [
          {
            elem: 'headline',
            content: ctx.attrs.headline
          },
          {
            elem: 'count',
            content: ctx.attrs.count
          }
        ]
      }
    ]
  })
)
