// src/Button.tsx
import * as React from "react";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1927-me2JFQfuUMus/shared/src/Button.module.css.js
var digest = "1b2e08c15e90a6e829489386655ec31ad9e8fb39aaf95339de432d19fc198f3a";
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
