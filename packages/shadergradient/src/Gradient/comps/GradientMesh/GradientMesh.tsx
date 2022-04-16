// @ts-nocheck
import * as React from 'react'
import { useRef } from 'react'
import { useFiber } from '../../../useFiber'

export const GradientMesh: React.FC<any> = () => {
  const { useFrame } = useFiber()

  const mesh = useRef()
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  return (
    <mesh ref={mesh} rotation={[0.3, 0.3, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'green'} />
    </mesh>
  )
}
