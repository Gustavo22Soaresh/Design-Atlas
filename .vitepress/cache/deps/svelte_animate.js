import {
  cubicOut
} from "./chunk-AA6KLWO5.js";
import "./chunk-UGBVNEQM.js";

// node_modules/svelte/src/animate/index.js
function flip(node, { from, to }, params = {}) {
  var { delay = 0, duration = (d) => Math.sqrt(d) * 120, easing = cubicOut } = params;
  var style = getComputedStyle(node);
  var transform = style.transform === "none" ? "" : style.transform;
  var [ox, oy] = style.transformOrigin.split(" ").map(parseFloat);
  ox /= node.clientWidth;
  oy /= node.clientHeight;
  var zoom = get_zoom(node);
  var sx = node.clientWidth / to.width / zoom;
  var sy = node.clientHeight / to.height / zoom;
  var fx = from.left + from.width * ox;
  var fy = from.top + from.height * oy;
  var tx = to.left + to.width * ox;
  var ty = to.top + to.height * oy;
  var dx = (fx - tx) * sx;
  var dy = (fy - ty) * sy;
  var dsx = from.width / to.width;
  var dsy = from.height / to.height;
  return {
    delay,
    duration: typeof duration === "function" ? duration(Math.sqrt(dx * dx + dy * dy)) : duration,
    easing,
    css: (t, u) => {
      var x = u * dx;
      var y = u * dy;
      var sx2 = t + u * dsx;
      var sy2 = t + u * dsy;
      return `transform: ${transform} translate(${x}px, ${y}px) scale(${sx2}, ${sy2});`;
    }
  };
}
function get_zoom(element) {
  if ("currentCSSZoom" in element) {
    return (
      /** @type {number} */
      element.currentCSSZoom
    );
  }
  var current = element;
  var zoom = 1;
  while (current !== null) {
    zoom *= +getComputedStyle(current).zoom;
    current = /** @type {Element | null} */
    current.parentElement;
  }
  return zoom;
}
export {
  flip
};
//# sourceMappingURL=svelte_animate.js.map
