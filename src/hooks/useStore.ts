import { create } from "zustand";
import { Store } from "../interfaces";

export const useStore = create<Store>((set) => ({
  texture: "dirt",
  cubes: [
    {
      id: crypto.randomUUID(),
      pos: [1, 1, 1],
      texture: "dirt",
    },
    {
      id: crypto.randomUUID(),
      pos: [1, 5, 1],
      texture: "log",
    },
  ],
  addCube: (x, y, z) => {
    set((state) => ({
      ...state,
      cubes: [
        ...state.cubes,
        {
          id: crypto.randomUUID(),
          texture: state.texture,
          pos: [x, y, z],
        },
      ],
    }));
  },
  removeCube: (id) => {
    set((state) => ({
      ...state,
      cubes: state.cubes.filter((cube) => cube.id !== id),
    }));
  },
  setTexture: (texture: string) => {
    set((state) => ({
      ...state,
      texture,
    }));
  },
  saveWorld: () => {},
  resetWorld: () => {},
}));
