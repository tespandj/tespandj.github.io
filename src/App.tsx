import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import Page from './components/Page.tsx'
import './App.css'

function App() {
	return (
		<div id="app-container">
			<Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
				<ScrollControls pages={3} damping={0}>
					<Page />
				</ScrollControls>
			</Canvas>
		</div>
	)
}

export default App
