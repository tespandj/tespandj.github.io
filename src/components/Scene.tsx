import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const Box = () => {
	const meshRef = useRef<Mesh>(null!)

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.x += 0.005
			meshRef.current.rotation.y += 0.005
		}
	})

	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[2.5, 2.5, 2.5]} />
			<meshStandardMaterial color={'#9BC4CB'} />
		</mesh>
	)
}

const Scene = () => {
	return (
		<Canvas>
			<ambientLight intensity={1} />
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Box />
		</Canvas>
	)
}

export default Scene
