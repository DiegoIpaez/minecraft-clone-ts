import { Mesh } from "three";

export type ActionsKeyboardMap = {
  [key: string]: string;
};

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