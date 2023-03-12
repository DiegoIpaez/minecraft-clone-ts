import { useEffect, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboards";
import { useStore } from "../hooks/useStore";
import { dirtImg, glassImg, grassImg, logImg, woodImg } from "../images";

const images = {
  dirtImg,
  grassImg,
  glassImg,
  woodImg,
  logImg,
};

const imgsArr = Object.entries(images);

const TextureSelect = () => {
  const [visible, setVisible] = useState(false);
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, glass, grass, wood, log } = useKeyboard();

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => setVisible(false), 2000);
    setVisible(true);
    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [texture]);

  useEffect(() => {
    const options = { dirt, glass, grass, wood, log };
    const selectedTexture = Object.entries(options).find(
      ([_, isEnabled]) => isEnabled ?? texture
    );

    if (selectedTexture) {
      const [textureData] = selectedTexture;
      setTexture(textureData);
    }
  }, [dirt, glass, grass, wood, log]);

  if (!visible) return null;

  return (
    <div className={`texture-selector ${visible ? "" : "hidden"}`}>
      {imgsArr.map(([imgKey, img]) => (
        <img
          className={`${texture}Img` === imgKey ? "selected" : ""}
          key={imgKey}
          src={img}
          alt={imgKey}
        />
      ))}
    </div>
  );
};

export default TextureSelect;
