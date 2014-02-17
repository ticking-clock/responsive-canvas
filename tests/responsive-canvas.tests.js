/*! responsive-canvas v0.2.0 */
(function(window, document) {
    var BLOCK = "block",
        ZEROPX = "0px",
        cList = [],
        plugin = {},
        getCanvases = function() {
            cList = document.querySelectorAll("canvas");
        },
        rc = window.responsiveCanvas = function() {
            getCanvases();
            rc.setStyles();
            rc.resizeToWindow();
        };

    rc.setStyles = function() {
        var c, body = document.body;
        if (plugin.isActive()) {
            plugin.setStyles();
        }

        for (var i=0, len=cList.length; i<len; i++) {
            c = cList[i];
            if (getComputedStyle(c).display !== BLOCK) {
                c.style.display = BLOCK;
            }
        }

        if (getComputedStyle(body).margin !== ZEROPX) {
            body.style.margin = ZEROPX;
        }
    };

    rc.resizeToWindow = function() {
        var c, w = window.innerWidth, h = window.innerHeight;
        if (plugin.isActive()) {
            plugin.resizeToWindow(w, h);
        } else {
            for (var i=0, len=cList.length; i<len; i++) {
                c = cList[i];
                c.width = w;
                c.height = h;
            }
        }
    };

    window.addEventListener("resize", rc.resizeToWindow);
    window.addEventListener("DOMContentLoaded", function() { responsiveCanvas(); })

    rc.plugin = function(p) {
        if (p) plugin = p;
        return plugin;
    };

})(window, document);

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
