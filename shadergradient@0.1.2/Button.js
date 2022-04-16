// src/Button.tsx
import * as React from "react";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1962-mkb0Qqz40qku/shadergradient/src/Button.module.css.js
var digest = "233cf9ef95b345a0c4991d9c854a92ed7bd6ee21a090dbccde50fd67342b7621";
var css = `._button_f2yv0_1 {
  background-color: #c8d5ff;
  color: red;
  padding: 30px;
}
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Button_module_css_default = { "button": "_button_f2yv0_1" };

// src/Button.tsx
function Button({ title = "Title" }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: Button_module_css_default.button
  }, title));
}
export {
  Button
};
