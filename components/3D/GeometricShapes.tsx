'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus, Octahedron, Tetrahedron } from '@react-three/drei'
import * as THREE from 'three'

export default function GeometricShapes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {/* Floating Torus */}
      <FloatingShape
        position={[-2, 1, 0]}
        color="#0ea5e9"
        rotationSpeed={0.5}
      >
        <Torus args={[0.5, 0.2, 16, 100]}>
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#0ea5e9"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </Torus>
      </FloatingShape>

      {/* Floating Octahedron */}
      <FloatingShape
        position={[2, -1, 0]}
        color="#8b5cf6"
        rotationSpeed={-0.3}
      >
        <Octahedron args={[0.6, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </Octahedron>
      </FloatingShape>

      {/* Floating Tetrahedron */}
      <FloatingShape
        position={[0, 0, -2]}
        color="#ec4899"
        rotationSpeed={0.4}
      >
        <Tetrahedron args={[0.5, 0]}>
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </Tetrahedron>
      </FloatingShape>
    </group>
  )
}

function FloatingShape({
  position,
  color,
  rotationSpeed,
  children,
}: {
  position: [number, number, number]
  color: string
  rotationSpeed: number
  children: React.ReactNode
}) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.7
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {children}
    </group>
  )
}

