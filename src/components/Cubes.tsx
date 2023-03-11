import { useStore } from "../hooks/useStore";
import Cube from "./Cube";

const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);
  
  return (
    <>
      {cubes.map(({ id, pos, texture }) => (
        <Cube key={id} position={pos} texture={texture} />
      ))}
    </>
  );
};

export default Cubes;
