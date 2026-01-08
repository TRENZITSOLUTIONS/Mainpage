'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CodeBlock {
  position: [number, number, number]
  color: string
  size: number
}

export default function FloatingCodeBlocks() {
  const groupRef = useRef<THREE.Group>(null)
  
  const codeBlocks: CodeBlock[] = useMemo(() => [
    { position: [-3, 2, 0], color: '#0ea5e9', size: 1.2 },
    { position: [3, 1, -2], color: '#8b5cf6', size: 1.0 },
    { position: [-2, -1, 1], color: '#ec4899', size: 0.9 },
    { position: [2, -2, -1], color: '#10b981', size: 0.8 },
    { position: [0, 3, 0], color: '#f59e0b', size: 1.1 },
  ], [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {codeBlocks.map((block, i) => (
        <FloatingBlock key={i} block={block} index={i} />
      ))}
    </group>
  )
}

function FloatingBlock({ block, index }: { block: CodeBlock; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = block.position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.4
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + index
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4 + index) * 0.3
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2 + index) * 0.2
    }
  })

  return (
    <group position={block.position}>
      {/* Main Code Block */}
      <mesh ref={meshRef}>
        <boxGeometry args={[block.size, block.size * 0.4, 0.05]} />
        <meshStandardMaterial
          color={block.color}
          emissive={block.color}
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
      {/* Glow Effect */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[block.size * 1.1, block.size * 0.45, 0.02]} />
        <meshStandardMaterial
          color={block.color}
          emissive={block.color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

