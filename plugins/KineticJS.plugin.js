(function(rc, document) {
    rc._initPlugin = function() {
        if (typeof Kinetic !== "undefined") {
            rc.plugin = "KineticJS";

            rc._resizeToWindow = function(w, h) {
                for (var i=0, len=Kinetic.stages.length; i<len; i++) {
                    Kinetic.stages[i].setSize({ width: w, height: h });
                }
            };

            (function() {
                var list = document.querySelectorAll(".kineticjs-content");
                for (var i=0, len=list.length; i<len; i++) {
                    list[i].style.display = "block";
                }
            })();
        }
    };
})(responsiveCanvas, document);
