// src/Button.tsx
import * as React from "react";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1935-aK0ya45uDroW/shadergradient/src/Button.module.css.js
var digest = "281ad4d3df6d2fca948403bf80d5bd68a79aefa1022f99d2e24f8e3eda85a246";
var css = `._button_15xo3_1 {
  background-color: #c8d5ff;
  color: red;
  padding: 30px; }
  ._button_15xo3_1 span {
    background: green; }
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Button_module_css_default = { "button": "_button_15xo3_1" };

// src/Button.tsx
function Button({ title = "Title" }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: Button_module_css_default.button
  }, title, /* @__PURE__ */ React.createElement("span", null, "heyy scss!")));
}
export {
  Button
};
