responsive-canvas
=================
A very small library with no dependencies that makes your full-screen HTML5 canvas responsive to the viewport.

Framework support
---
The following HTML5 canvas frameworks are supported via plugin files:
- KineticJS


Usage
---
When using vanilla HTML5 canvas elements:
```javascript
<script src="responsive-canvas.min.js"></script>
```

When using KineticJS:
```javascript
<script src="responsive-canvas.kinetic.min.js"></script>
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

The default grunt task will build the distributable files in the `/dist` directory.
```
grunt
```

`dist/responsive-canvas.min.js` is the core library with no support for HTML5 Canvas frameworks.
`dist/responsive-canvas.kinetic` includes the plugin for KineticJS.

Testing
---
After the dev dependencies are installed, run the responsive tests.
```
grunt test
```

Todo
---
- Utilize the HTML5 full screen API.
- Add option for scaling with current aspect ratio instead of extending the canvas.
