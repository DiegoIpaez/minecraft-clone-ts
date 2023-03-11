import { useEffect, useState, KeyboardEvent } from "react";
import { Actions, IDictionary } from "../interfaces";

const ACTIONS_KEYBOARD_MAP: IDictionary<string> = {
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "moveLeft",
  KeyD: "moveRight",
  Space: "jump",
  Digit1: "dirt",
  Digit2: "grass",
  Digit3: "glass",
  Digit4: "wood",
  Digit5: "log",
};

export const useKeyboard = () => {
  const [actions, setActions] = useState<Actions>({
    dirt: false,
    glass: false,
    grass: false,
    jump: false,
    log: false,
    moveBackward: false,
    moveForward: false,
    moveLeft: false,
    moveRight: false,
    wood: false,
  });

  const updateActions = (action: string, value: boolean) =>
    setActions((prevActions) => ({
      ...prevActions,
      [action]: value,
    }));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      const { code } = event;
      const actionData = ACTIONS_KEYBOARD_MAP[code];
      if (actionData) return updateActions(actionData, true);
    };

    const handleKeyUp = (event: KeyboardEvent): void => {
      const { code } = event;
      const actionData = ACTIONS_KEYBOARD_MAP[code];
      if (actionData) return updateActions(actionData, false);
    };

    document.addEventListener("keydown", handleKeyDown as any);
    document.addEventListener("keyup", handleKeyUp as any);
    return () => {
      document.addEventListener("keydown", handleKeyDown as any);
      document.addEventListener("keyup", handleKeyUp as any);
    };
  }, []);

  return actions;
};
