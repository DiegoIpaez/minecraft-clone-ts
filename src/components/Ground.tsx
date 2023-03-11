import { usePlane } from "@react-three/cannon";
import { Ref } from '../interfaces'
import { groundTexture } from "../utils/textures";

const rotationX = -Math.PI / 2;
const rotationY = 0;
const rotationZ = 0;

const positionX = 0;
const positionY = -0.5;
const positionZ = 0;

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [rotationX, rotationY, rotationZ],
    position: [positionX, positionY, positionZ],
  }));

  groundTexture.repeat.set(100, 100);

  return (
    <mesh ref={ref as Ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

export default Ground;
