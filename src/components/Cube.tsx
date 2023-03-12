import { useState } from "react";
import { useBox } from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import { Position, Ref } from "../interfaces";
import { useStore } from "../hooks/useStore";
import textures from "../utils/textures";

interface Props {
  id: string;
  position: Position;
  texture: string;
}

const Cube = ({ id, position, texture }: Props) => {
  const [removeCube] = useStore((state) => [state.removeCube]);
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const handleHovered = (event: ThreeEvent<PointerEvent>, value: boolean) => {
    event.stopPropagation();
    setIsHovered(value);
  };

  const handleRemoveCube = (e: ThreeEvent<MouseEvent>) => {
    if (e.altKey) return removeCube(id);
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
