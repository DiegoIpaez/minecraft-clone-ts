import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground";
import FPV from "./components/FPV";
import Player from "./components/Player";

const sunPositionX = 100;
const sunPositionY = 100;
const sunPositionZ = 20;

const App = () => {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[sunPositionX, sunPositionY, sunPositionZ]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
    </>
  );
};

export default App;
