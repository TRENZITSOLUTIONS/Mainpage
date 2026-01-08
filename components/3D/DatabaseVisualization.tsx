'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

export default function DatabaseVisualization() {
  const groupRef = useRef<THREE.Group>(null)
  const boxesRef = useRef<THREE.Mesh[]>([])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    
    boxesRef.current.forEach((box, i) => {
      if (box) {
        box.position.y = Math.sin(state.clock.elapsedTime + i) * 0.3
        box.rotation.x = state.clock.elapsedTime * 0.5
        box.rotation.z = state.clock.elapsedTime * 0.3
      }
    })
  })

  const positions = [
    [-2, 0, 0],
    [2, 0, 0],
    [0, 0, -2],
    [0, 0, 2],
    [-1.5, 1.5, -1.5],
    [1.5, 1.5, 1.5],
  ]

  // Create line geometries
  const lineGeometries = useMemo(() => {
    return positions.map((pos) => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array([0, 0, 0, pos[0], pos[1], pos[2]])
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      return geometry
    })
  }, [])

  return (
    <group ref={groupRef}>
      {/* Central Database */}
      <Cylinder args={[0.8, 0.8, 2, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Cylinder>
      
      {/* Data Nodes */}
      {positions.map((pos, i) => (
        <Box
          key={i}
          ref={(el) => {
            if (el) boxesRef.current[i] = el
          }}
          args={[0.4, 0.4, 0.4]}
          position={[pos[0], pos[1], pos[2]]}
        >
          <meshStandardMaterial
            color={i % 2 === 0 ? '#8b5cf6' : '#ec4899'}
            emissive={i % 2 === 0 ? '#8b5cf6' : '#ec4899'}
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
          />
        </Box>
      ))}
      
      {/* Connection Lines */}
      {lineGeometries.map((geometry, i) => (
        <line key={`line-${i}`} geometry={geometry}>
          <lineBasicMaterial color="#0ea5e9" opacity={0.3} transparent />
        </line>
      ))}
    </group>
  )
}

