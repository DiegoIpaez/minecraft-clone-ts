import { Mesh } from "three";

export type Position = [number, number, number];

export interface IDictionary<TValue> {
  [key: string]: TValue;
}

export interface Ref {
  current: Mesh;
}
export interface Actions {
  moveForward: boolean;
  moveBackward: boolean;
  moveLeft: boolean;
  moveRight: boolean;
  jump: boolean;
  dirt: boolean;
  grass: boolean;
  glass: boolean;
  wood: boolean;
  log: boolean;
}

export interface Cube {
  id: string;
  pos: Position;
  texture: string;
}

export interface Store {
  texture: string;
  cubes: Cube[];
  addCube: (x: number, y: number, z: number) => void;
  removeCube: () => void;
  setTexture: () => void;
  saveWorld: () => void;
  resetWorld: () => void;
}
