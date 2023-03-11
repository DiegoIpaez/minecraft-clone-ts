import { useBox } from "@react-three/cannon";
import { Position, Ref } from "../interfaces";
import textures from "../utils/textures";

interface Props {
  position: Position;
  texture: string;
}

const Cube = ({ position, texture }: Props) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const activeTexture = textures[texture];

  return (
    <mesh ref={ref as Ref}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  );
};

export default Cube;
