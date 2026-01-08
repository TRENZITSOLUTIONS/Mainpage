'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

interface Node {
  position: [number, number, number]
  color: string
}

export default function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null)
  const nodesRef = useRef<THREE.Mesh[]>([])

  const nodes: Node[] = useMemo(() => [
    { position: [-2, 1, 0], color: '#0ea5e9' },
    { position: [2, 1, 0], color: '#8b5cf6' },
    { position: [0, -1, 1.5], color: '#ec4899' },
    { position: [-1.5, -1, -1.5], color: '#10b981' },
    { position: [1.5, -1, -1.5], color: '#f59e0b' },
    { position: [0, 2, 0], color: '#06b6d4' },
  ], [])

  // Create connection lines
  const connections = useMemo(() => {
    const lines: Array<{ start: Node; end: Node }> = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.5) {
          lines.push({ start: nodes[i], end: nodes[j] })
        }
      }
    }
    return lines
  }, [nodes])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    
    nodesRef.current.forEach((node, i) => {
      if (node) {
        const originalY = nodes[i].position[1]
        node.position.y = originalY + Math.sin(state.clock.elapsedTime * 2 + i) * 0.2
        node.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3 + i) * 0.1)
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <group key={i}>
          <Sphere
            ref={(el) => {
              if (el) nodesRef.current[i] = el
            }}
            args={[0.15, 32, 32]}
            position={node.position}
          >
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </Sphere>
          {/* Glow effect */}
          <Sphere args={[0.25, 32, 32]} position={node.position}>
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.2}
              transparent
              opacity={0.3}
            />
          </Sphere>
        </group>
      ))}
      
      {/* Connection Lines */}
      {connections.map((conn, i) => (
        <ConnectionLine key={i} start={conn.start.position} end={conn.end.position} />
      ))}
    </group>
  )
}

function ConnectionLine({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const geometry = useMemo(() => {
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)]
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [start, end])

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#0ea5e9" opacity={0.2} transparent />
    </line>
  )
}

