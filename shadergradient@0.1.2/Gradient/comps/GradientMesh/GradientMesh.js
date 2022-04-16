// src/Gradient/comps/GradientMesh/GradientMesh.tsx
import * as React from "react";
import { useRef } from "react";
import { useFiber } from "../../../useFiber.js";
var GradientMesh = () => {
  const { useFrame } = useFiber();
  const mesh = useRef();
  useFrame((state, delta) => mesh.current.rotation.x += 0.01);
  return /* @__PURE__ */ React.createElement("mesh", {
    ref: mesh,
    rotation: [0.3, 0.3, 0]
  }, /* @__PURE__ */ React.createElement("boxGeometry", {
    args: [1, 1, 1]
  }), /* @__PURE__ */ React.createElement("meshStandardMaterial", {
    color: "gold"
  }));
};
export {
  GradientMesh
};
