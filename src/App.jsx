import "./App.css";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";

function MovingStars() {
  const starsRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (starsRef.current) {
      starsRef.current.rotation.x = elapsedTime * 0.01;
      starsRef.current.rotation.y = elapsedTime * 0.01;
    }
  });

  return <Stars ref={starsRef} radius={50} count={5000} factor={4} fade  />;
}

function App() {
  return (
    <div className="App ">
      <motion.section
        className="relative overflow-hidden 
        text-gray-200 min-h-screen bg-black "
      >
        <Navbar />
        <div className="absolute inset-0 z-0 ">
          <Canvas>
            <MovingStars />
          </Canvas>
        </div>
      </motion.section>
    </div>
  );
}
export default App;
