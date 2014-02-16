(function(rc) {

    rc._initPlugin = function() {
        var s;
        if (typeof Kinetic !== "undefined") {
            rc.plugin = "KineticJS";
            rc._resizeToWindow = function(w, h) {
                for (var i= 0, len=Kinetic.stages.length; i<len; i++) {
                    Kinetic.stages[i].setSize({ width: w, height: h });
                }
            };
        }
    };

})(responsiveCanvas);

