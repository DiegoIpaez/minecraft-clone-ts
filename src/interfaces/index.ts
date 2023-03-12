import { Mesh } from "three";

export type Position = [number, number, number];
export type PositionCallback = (x: number, y: number, z: number) => void;

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

export interface IDictionary<TValue> {
  [key: string]: TValue;
}

export interface Store {
  texture: string;
  cubes: Cube[];
  addCube: PositionCallback;
  removeCube: (id: string) => void;
  setTexture: () => void;
  saveWorld: () => void;
  resetWorld: () => void;
}

export interface Ref {
  current: Mesh;
}
