import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground";
import FPV from "./components/FPV";
import Player from "./components/Player";
import Cubes from "./components/Cubes";
import TextureSelect from "./components/TextureSelect";
import Menu from "./components/Menu";

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
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
      <TextureSelect />
      <Menu />
    </>
  );
};

export default App;
