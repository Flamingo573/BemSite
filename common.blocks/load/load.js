modules.define('load', ['i-bem__dom', 'Animate'], function(provide, BEMDOM, Animate) {
  let a = 90;
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                  this.loadStart();
                }
            }
        },
        loadStart: function() {
              this.animate = new Animate();

              this.animate.play(this.drawFunc.bind(this), 1000);
              this.elem('inside-line').animate({width: a + '%'}, 1000);
        },
        drawFunc: function(time) {
          let num = Math.ceil(time * 90);

          if (num > 0 ) this.elem('percent').text(`${num}%`);
        } 
    }));
});
