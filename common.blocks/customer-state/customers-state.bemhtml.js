block('customer-state')(
  content()([
    {
      block: 'state',
      mods: {orders: true},
      attrs: {headline: 'ORDERS TOTAL', count: 43}
    },
    {
      block: 'state',
      mods: {progress: true},
      attrs: {headline: 'ORDERS IN PROGRESS', count: 2}
    }
  ])
);
