import { usePlane } from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import { useStore } from "../hooks/useStore";
import { Ref } from "../interfaces";
import { groundTexture } from "../utils/textures";

const ROTATION_X = -Math.PI / 2;
const ROTATION_Y = 0;
const ROTATION_Z = 0;

const POSITION_X = 0;
const POSITION_Y = -0.5;
const POSITION_Z = 0;

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [ROTATION_X, ROTATION_Y, ROTATION_Z],
    position: [POSITION_X, POSITION_Y, POSITION_Z],
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  const handleClickGround = (event: ThreeEvent<MouseEvent>) => {
    if (event.altKey) return;
    event.stopPropagation();
    const point: number[] = Object.values(event.point);
    const [x, y, z] = point.map((num) => Math.ceil(num || 0));
    addCube(x, y, z);
  };

  groundTexture.repeat.set(100, 100);

  return (
    <mesh ref={ref as Ref} onClick={(e) => handleClickGround(e)}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

export default Ground;
