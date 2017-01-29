'use strict';

modules.define('customer-activity', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
        handlerClick: function(event) {
          let elem = $(event.target),
              data = elem.attr('data-tab');

          if (!data) return;

          this.removeMod();

          this.setMod(elem, 'selected');
          this.setMod(this.elem('content'),'on', data);
        },
        removeMod: function() {
          this.delMod(this.elem('content'), 'on');
          this.delMod(this.elem('tab'), 'selected');
        }
    },
    {
      live: function() {
        this.liveBindTo('click', function(event) {
          this.handlerClick(event);
        });
      }
    }));
});
