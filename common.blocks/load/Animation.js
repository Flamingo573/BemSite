modules.define('Animate', function(provide) {
    provide(function() {
        this.play = function(draw, duration, self) {
            let start = performance.now();

            requestAnimationFrame(function animate(time) {
                let timeFraction = (time - start) / duration;


                if (timeFraction > 1) timeFraction = 1;

                draw(timeFraction);

                if (timeFraction < 1) {
                    requestAnimationFrame(animate);
                }
            });

        };
    });
});
