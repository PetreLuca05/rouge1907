import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {
  return (
    <Canvas camera={{ position: [50, 0, 0], fov: 120 }}>
      <Experience />
    </Canvas>
  )
}

export default App
