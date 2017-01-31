block('contact-field')(
  attrs()(''),
  content()(function(node, ctx) {
    return [
      {
        elem: 'input',
        tag: 'input',
        attrs: ctx.attrs
      },
      {
        elem: 'pencil-line'
      } 
    ];
  })
);
