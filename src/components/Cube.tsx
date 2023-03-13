import { useState } from "react";
import { useBox } from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import { Position, Ref } from "../interfaces";
import { useStore } from "../hooks/useStore";
import textures from "../utils/textures";
import { Vector3 } from "three";

interface Props {
  id: string;
  position: Position;
  texture: string;
}

const Cube = ({ id, position, texture }: Props) => {
  const [removeCube, addCube] = useStore((state) => [
    state.removeCube,
    state.addCube,
  ]);
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const handleHovered = (event: ThreeEvent<PointerEvent>, value: boolean) => {
    event.stopPropagation();
    setIsHovered(value);
  };

  const addCubeByClickedFace = (clickedFace: number, position: Vector3) => {
    const { x, y, z } = position;

    switch (clickedFace) {
      case 0:
        addCube(x + 1, y, z);
        break;
      case 1:
        addCube(x - 1, y, z);
        break;
      case 2:
        addCube(x, y + 1, z);
        break;
      case 3:
        addCube(x, y - 1, z);
        break;
      case 4:
        addCube(x, y, z + 1);
        break;
      case 5:
        addCube(x, y, z - 1);
        break;
      default:
        break;
    }
  };

  const handleRemoveCube = (e: ThreeEvent<MouseEvent>) => {
    if (e.altKey) return removeCube(id);
    if (ref?.current?.position && e.faceIndex) {
      const clickedFace = Math.floor(e.faceIndex / 2);
      addCubeByClickedFace(clickedFace, ref.current.position)
    }
  };

  const activeTexture = textures[texture];

  return (
    <mesh
      ref={ref as Ref}
      onPointerMove={(e) => handleHovered(e, true)}
      onPointerOut={(e) => handleHovered(e, false)}
      onClick={(e) => handleRemoveCube(e)}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        map={activeTexture}
        attach="material"
        color={isHovered ? "grey" : "white"}
      />
    </mesh>
  );
};

export default Cube;
