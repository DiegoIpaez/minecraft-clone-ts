import { Vector3 } from "three";
import { useEffect, useRef } from "react";
import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { Ref } from "../interfaces";
import { useKeyboard } from "../hooks/useKeyboards";
import {
  CHARACTER_JUMP_FORCE,
  CHARACTER_SPEED,
  DEFAULT_POSITION,
} from "../constants";

const positionX = 0;
const positionY = 1;
const positionZ = 0;

const Player = () => {
  const { 
    moveBackward,
    moveForward,
    moveLeft,
    moveRight,
    jump 
  } = useKeyboard();

  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [positionX, positionY, positionZ],
  }));

  const pos = useRef(DEFAULT_POSITION);
  const vel = useRef(DEFAULT_POSITION);

  useEffect(() => {
    api.position.subscribe((p) => {
      pos.current = p;
    });
  }, [api.position]);

  useEffect(() => {
    api.velocity.subscribe((p) => {
      vel.current = p;
    });
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );
    const direction = new Vector3();

    const totalUpDown = (moveBackward ? 1 : 0) - (moveForward ? 1 : 0);
    const totalLeftRight = (moveLeft ? 1 : 0) - (moveRight ? 1 : 0);

    const frontVector = new Vector3(0, 0, totalUpDown);
    const sideVector = new Vector3(totalLeftRight, 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(CHARACTER_SPEED) // walk: 2, run: 5
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (jump && Math.abs(vel.current[1]) < 0.05) {
      api.velocity.set(vel.current[0], CHARACTER_JUMP_FORCE, vel.current[2]);
    }
  });

  return <mesh ref={ref as Ref} />;
};

export default Player;
