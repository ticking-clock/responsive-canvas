responsive-canvas
=================
A very small library with no dependencies that makes your full-screen HTML5 canvas responsive to the viewport.

Framework support
---
The following HTML5 canvas frameworks are supported via plugin files:
- KineticJS


Usage
---
```javascript
<script src="responsive-canvas.min.js"></script>
```

When the script loads, it will automatically resize all `<canvas>` elements to match the viewport size.

You can manually trigger the resize by invoking the responsive canvas function.

```javascript
responsiveCanvas();
```

Building
---
Begin by installing the node and bower dependencies.
```
npm install
bower install
```

The default grunt task will build scripts into the `/dist` directory, and include all available plugin support for canvas frameworks.
```
grunt
```

`dist/responsive-canvas.js` is the debug script.
`dist/responsive-canvas.min.js` is the minified and compressed script.

If you don't need to use `responsive-canvas` in conjunction with a canvas framework, you can build a stripped-down version of the library.
```
grunt core
```

Testing
---
The responsive tests will exercise the `responsive-canvas` script under a variety of viewport size conditions.
You do not need to build scripts into the `/dist` directory to run the tests. A separate testing version of `responsive-canvas` is automatically created in `/tests`.
```
grunt test
```

Todo
---
- Utilize the HTML5 full screen API.
- Add option for scaling with current aspect ratio instead of extending the canvas.
