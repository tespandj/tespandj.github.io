import './App.css'
import Scene from './components/Scene'

function App() {

	return (
		<div id="app-container">
			<header>
				<nav>
					<a href="#home">Home</a>
					<a href="#projects">Projects</a>
					<a href="#about">About</a>
					<a href="#contact">Contact</a>
				</nav>
			</header>
			<main>
				<section id="home">
					<div className="hero-content">
						<h1 id="name">Talan Espandju</h1>
						<p id="status">Dev Fullstack</p>
					</div>
					<div className="scene-container">
						<Scene />
					</div>
				</section>
			</main>
		</div>
	)
}

export default App
