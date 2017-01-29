block('customer-happiness')(
  content()([
    {
      elem: 'headline',
      content: 'CUSTOMER HAPPINESS'
    },
    {
      elem: 'smile',
      tag: 'img',
      attrs: {src: 'image/smile.png'}
    },
    {
      elem: 'status',
      content: 'The Product is Awesome'
    },
    {
      block: 'load',
      js: true,
      content: [
        {
          elem: 'line',
          content: [
            {
              elem: 'inside-line',
              attrs: function() {
                return {style: 'color: red;'}
              }()
            }
          ]
        },
        {
          elem: 'percent',
          content: '0%'
        }
      ]
    }

  ])
);
