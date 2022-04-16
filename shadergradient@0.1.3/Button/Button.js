// src/Button/Button.tsx
import React from "react";
import { motion } from "framer-motion";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1968-izjbIq7YVs74/shadergradient/src/Button/Button.module.css.js
var digest = "e31c435b7860fdf29fd2ab3b90122296a28e35f859569c8199d7de3bccc23179";
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

// src/Button/Button.tsx
function Button({ title = "Title" }) {
  return /* @__PURE__ */ React.createElement(motion.button, {
    className: Button_module_css_default.button,
    whileHover: { scale: 0.9 },
    whileTap: { scale: 0.7 }
  }, title, /* @__PURE__ */ React.createElement("span", null, "heyy scss!"));
}
export {
  Button
};
