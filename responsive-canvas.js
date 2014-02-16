(function(window, document) {
    var cList = [];

    function getCanvases() {
        var c;
        cList = document.querySelectorAll("canvas");
        for (var i=0, len=cList.length; i<len; i++) {
            c = cList[i];
            if (getComputedStyle(c).display !== "block") {
                c.style.display = "block";
            }
        }
    }

    var rc = window.responsiveCanvas = function() {
        rc._init();
    }

    rc._init = function() {
        getCanvases();
        rc._initPlugin();
        rc.resizeToWindow();
    };

    rc.resizeToWindow = function() {
        rc._resizeToWindow(window.innerWidth, window.innerHeight);
    }

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
    }

})(window, document);

responsiveCanvas();