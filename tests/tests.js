(function() {
    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    window.windowWidth = getParameterByName("width") || window.innerWidth;     // Just use actual window size if not using grunt
    window.windowHeight = getParameterByName("height") || window.innerHeight;

    QUnit.begin(function() {
        // Hides the page scrollbars so their extra width doesn't affect the tests
        $("body").css("overflow", "hidden");
    });

    QUnit.done(function() {
        $("body").css("overflow", "");

    });

    module("Main tests");

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

    test("Body has margin:0 to hide scrollbars", function() {
        var $body = $("body"),
            margin = $body.css("margin") || "0px";
        equal(margin, "0px");
    });

    /* --- */

    module("CSS tests", {
        setup: function() {
            // Reset the manual body style
            $("body").css("margin", "");

            // Add a fake stylesheet so elements get styles applied from another source
            $('<style type="text/css"> canvas { display: block; } body { margin: 0; } </style>').appendTo("#qunit-fixture");
        }
    });

    test("display: block is not added if canvas already has style", function() {
        // Get a fresh canvas since the old one was created before the fake stylesheet was added
        $("#canvas-fixture").replaceWith('<canvas id="canvas-fixture"></canvas>');
        var $can = $("#canvas-fixture");
        responsiveCanvas();
        var style = $can.attr("style"),
            styleWasSet = (function() {
                return style && style.indexOf("display: block") !== -1;
            })();
        ok(!styleWasSet, "style attribute should not contain display: block");
    });

    test("body margin: 0 is not added if body already has no margin", function() {
        var $body = $("body"),
            style = $body.attr("style"),
            styleWasSet = (function() {
                return style && style.indexOf("margin: 0") !== -1;
            })();
        ok(!styleWasSet, "body style attribute should not contain margin: 0");
    })

})();