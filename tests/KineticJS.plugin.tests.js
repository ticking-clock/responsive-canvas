(function() {
    module("Kinetic module tests without script");

    test("Kinetic plugin is not present if Kinetic is not loaded", function() {
        ok(typeof Kinetic === "undefined");
        notEqual(responsiveCanvas.plugin, "KineticJS");
    });

    module("Kinetic module tests with script", {
        setup: function() {
            $('<script type="text/javascript" src="../bower_components/kineticjs/kinetic.js"></script>').appendTo("#qunit-fixture");
        }
    });

    test("Kinetic is detected for this test module", function() {
        // Kinetic namespace
        ok(typeof Kinetic !== "undefined");
        ok(typeof Kinetic.version !== "undefined")
    });

    test("Kinetic plugin is present if Kinetic is loaded", function() {
        responsiveCanvas();
        equal(responsiveCanvas.plugin, "KineticJS");
    });

    test("Kinetic stage is window size", function() {
        var stage = new Kinetic.Stage({
            container: "qunit-fixture"
        });
        var layer = new Kinetic.Layer();
        stage.add(layer);
        responsiveCanvas();
        equal(stage.getWidth(), windowWidth);
        equal(stage.getHeight(), windowHeight);
    });

})();
