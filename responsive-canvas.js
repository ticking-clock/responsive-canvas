(function(window, document) {
    var cList = [];

    function getCanvases() {
        var c;
        cList = document.querySelectorAll("canvas");
        for (var i=0, len=cList.length; i<len; i++) {
            c = cList[i];
            c.style.display = "block";
        }
    }

    function resizeToWindow() {
        var c, w = window.innerWidth, h = window.innerHeight;
        for (var i=0, len=cList.length; i<len; i++) {
            c = cList[i];
            c.width = w;
            c.height = h;
        }
    }

    window.addEventListener("resize", resizeToWindow);

    window.responsiveCanvas = function() {
        getCanvases();
        resizeToWindow();
    };

})(window, document);

responsiveCanvas();