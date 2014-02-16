responsive-canvas
=================
A very small library with no dependencies that makes your HTML5 canvas responsive to the size of the window.

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

Testing
---
Begin by installing the node and bower dependencies.
```
grunt install
bower install
```

Run the responsive tests with
```
grunt test
```


Todo
---
- Add option for scaling with current aspect ratio instead of extending the canvas