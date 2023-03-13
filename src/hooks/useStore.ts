import { create } from "zustand";
import { Store, Cube } from "../interfaces";

const getLocalStorage = (id: string): Cube[] => {
  const data = window.localStorage.getItem(id);
  return data ? JSON.parse(data) : [];
}
const setLocalStorage = (id: string, value: Cube[]) =>
  window.localStorage.setItem(id, JSON.stringify(value));

export const useStore = create<Store>((set) => ({
  texture: "dirt",
  cubes: getLocalStorage('cubes'),
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
  saveWorld: () => {
    set((state) => {
      setLocalStorage("cubes", state.cubes);
      return state;
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));
