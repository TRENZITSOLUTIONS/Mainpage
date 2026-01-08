'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cylinder, Sphere } from '@react-three/drei'
import * as THREE from 'three'

export default function DataFlow() {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Mesh[]>([])

  const particleCount = 20
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      angle: (i / particleCount) * Math.PI * 2,
      radius: 2 + (i % 3) * 0.3,
      speed: 0.3 + (i % 2) * 0.2,
    }))
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }

    particlesRef.current.forEach((particle, i) => {
      if (particle) {
        const config = particles[i]
        const time = state.clock.elapsedTime * config.speed
        const angle = config.angle + time
        const radius = config.radius + Math.sin(time * 2) * 0.2
        
        particle.position.x = Math.cos(angle) * radius
        particle.position.y = Math.sin(time * 3 + i) * 0.5
        particle.position.z = Math.sin(angle) * radius
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Central Hub */}
      <Cylinder args={[0.6, 0.6, 1.5, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </Cylinder>

      {/* Data Nodes */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2
        const radius = 2
        return (
          <Box
            key={i}
            args={[0.3, 0.3, 0.3]}
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
          >
            <meshStandardMaterial
              color={i % 2 === 0 ? '#8b5cf6' : '#ec4899'}
              emissive={i % 2 === 0 ? '#8b5cf6' : '#ec4899'}
              emissiveIntensity={0.4}
              metalness={0.8}
              roughness={0.2}
            />
          </Box>
        )
      })}

      {/* Floating Particles */}
      {particles.map((_, i) => (
        <Sphere
          key={i}
          ref={(el) => {
            if (el) particlesRef.current[i] = el
          }}
          args={[0.05, 8, 8]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#0ea5e9"
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  )
}

