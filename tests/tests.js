(function() {
    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    var windowWidth = getParameterByName("width") || window.innerWidth;     // Just use actual window size if not using grunt
    var windowHeight = getParameterByName("height") || window.innerHeight;

    module("responsive-canvas tests", {
        setup: function() {
            // Hides the page scrollbars so their extra width doesn't affect the tests
            $("body").css("overflow", "hidden");
        },
        teardown: function() {
            $("body").css("overflow", "auto");
        }
    });

    test("responsiveCanvas exists", function() {
        ok(typeof window.responsiveCanvas !== "undefined");
    });

    test("Setting viewport size in grunt task is effective", function() {
        var $win = $(window);
        equal($win.width(), windowWidth);
        equal($win.height(), windowHeight);
    });

    test("Canvas is sized to the window", function() {
        var $can = $("#canvas-fixture");
        equal($can.width(), windowWidth);
        equal($can.height(), windowHeight);
    });

    test("Canvas width/height attributes match window", function() {
        var $can = $("#canvas-fixture");
        equal($can.attr("width"), windowWidth);
        equal($can.attr("height"), windowHeight);
    });

    test("Canvas is sized to the window when responsiveCanvas()", function() {
        var $fixture = $("#qunit-fixture");
        $fixture.empty();
        var $newCanvas = $('<canvas id="temp-canvas"></canvas>');
        $newCanvas.appendTo($fixture);
        notEqual($newCanvas.width(), windowWidth);
        notEqual($newCanvas.height(), windowHeight);
        responsiveCanvas();
        equal($newCanvas.width(), windowWidth);
        equal($newCanvas.height(), windowHeight);
    });

    test("Canvas is display:block to hide scrollbars", function() {
        var $can = $("#canvas-fixture");
        equal($can.css("display"), "block");
    });

})();
