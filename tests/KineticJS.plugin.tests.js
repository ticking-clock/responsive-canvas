(function() {
    module("Kinetic module tests without script");

    test("Kinetic plugin is not active if Kinetic is not loaded", function() {
        ok(typeof Kinetic === "undefined");
        ok(!responsiveCanvas.plugin().isActive());
    });

    module("Kinetic module tests with script", {
        setup: function() {
            stop();
            $.getScript("../bower_components/kineticjs/kinetic.js")
                .done(function() {
                    start();
                });
        }
    });

    test("Kinetic is detected for this test module", function() {
        ok(typeof Kinetic !== "undefined");
        ok(typeof Kinetic.version !== "undefined")
    });

    test("Kinetic plugin is present if Kinetic is loaded", function() {
        responsiveCanvas();
        ok(responsiveCanvas.plugin().isActive());
    });

    test("Kinetic stage is window size", function() {
        var stage = new Kinetic.Stage({ container: "qunit-fixture" });
        var layer = new Kinetic.Layer();
        stage.add(layer);
        responsiveCanvas();
        equal(stage.getWidth(), windowWidth);
        equal(stage.getHeight(), windowHeight);
    });

    test("Kinetic content element is display: block", function() {
        var stage = new Kinetic.Stage({ container: "qunit-fixture" });
        var layer = new Kinetic.Layer();
        stage.add(layer);
        responsiveCanvas();
        equal($(".kineticjs-content").css("display"), "block");
    });
})();
