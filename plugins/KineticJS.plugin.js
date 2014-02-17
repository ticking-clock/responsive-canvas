(function(rc, document) {
    rc.plugin({
        name: "KineticJS",
        isActive: function() {
            return typeof Kinetic !== "undefined";
        },
        setStyles: function() {
            var list = document.querySelectorAll(".kineticjs-content");
            for (var i=0, len=list.length; i<len; i++) {
                list[i].style.display = "block";
            }
        },
        resizeToWindow: function(w, h) {
            for (var i=0, len=Kinetic.stages.length; i<len; i++) {
                Kinetic.stages[i].setSize({ width: w, height: h });
            }
        }
    });
})(responsiveCanvas, document);
