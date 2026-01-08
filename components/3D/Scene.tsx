'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import DatabaseVisualization from './DatabaseVisualization'
import NetworkNodes from './NetworkNodes'
import GeometricShapes from './GeometricShapes'
import FloatingCodeBlocks from './FloatingCodeBlocks'
import DataFlow from './DataFlow'

interface SceneProps {
  type?: 'database' | 'network' | 'geometric' | 'code' | 'dataflow'
}

export default function Scene({ type = 'database' }: SceneProps) {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />
      
      {type === 'database' && <DatabaseVisualization />}
      {type === 'network' && <NetworkNodes />}
      {type === 'geometric' && <GeometricShapes />}
      {type === 'code' && <FloatingCodeBlocks />}
      {type === 'dataflow' && <DataFlow />}
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
      <Environment preset="night" />
    </Canvas>
  )
}

