// @ts-nocheck
import * as React from 'react'
import { useRef, useState } from 'react'
import { FiberCanvas, useFiber } from '../useFiber'
import { GradientMesh } from './comps/GradientMesh/index'

export function Gradient() {
  const fiber = useFiber()

  return (
    <FiberCanvas fiber={fiber}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <GradientMesh />
    </FiberCanvas>
  )
}

function Box(props) {
  const { useFrame } = useFiber()

  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'red' : 'orange'} />
    </mesh>
  )
}
