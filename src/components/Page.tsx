import { Html, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'

const Page = () => {
	const scroll = useScroll()
	const groupRef = useRef<Group>(null!)

	useFrame(() => {
		groupRef.current.position.x = -scroll.offset * 20
	})

	return (
		<group ref={groupRef}>
		
			<Html position={[0, 0, 0 ]as any} transform>
				<div className="hero-content">
					<h1>Talan Espandju</h1>
					<p>Dev FullStack</p>
				</div>
			</Html>

			{/* <Html position={[3, 0, 0] as any} transform>
				<div className="section-content">
				<h1>About Me</h1>
				<img id="logo42"
					src="../../../public/42.png"  // <-- met le chemin de ton image ici
					alt="Ecole 42" 
					style={{ width: '1.6%', height: 'auto' }} // optionnel : ajuste la taille
				/>
				<p>Here I will showcase my work.</p>
				</div>
			</Html>

			<Html position={[10, 0, 0] as any} transform>
				<div className="section-content">
				<h1>Skills</h1>
				<p>My skills and journey.</p>
				</div>
			</Html> */}
		</group>
	)
}

export default Page
