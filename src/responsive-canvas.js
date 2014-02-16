(function(window, document) {
    var BLOCK = "block",
        ZEROPX = "0px",
        cList = [],
        getCanvases = function() {
            cList = document.querySelectorAll("canvas");
        },
        rc = window.responsiveCanvas = function() {
            rc._init();
        };

    rc._init = function() {
        getCanvases();
        rc.setStyles();
        rc._initPlugin();
        rc.resizeToWindow();
    };

    rc.setStyles = function() {
        var c, body = document.body;
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
        rc._resizeToWindow(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", rc.resizeToWindow);

    // Plugins overwrite these
    rc._initPlugin = function() {};
    rc._resizeToWindow = function(w, h) {
        var c;
        for (var i=0, len=cList.length; i<len; i++) {
            c = cList[i];
            c.width = w;
            c.height = h;
        }
    };

})(window, document);

responsiveCanvas();