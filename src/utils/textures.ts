import { grassImg, dirtImg, logImg, glassImg, woodImg } from "../images";
import { NearestFilter, RepeatWrapping, Texture, TextureLoader } from "three";
import { IDictionary } from '../interfaces'

const grassTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);

const groundTexture = new TextureLoader().load(grassImg);

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

groundTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;

export {
  groundTexture,
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture,
};

const textures: IDictionary<Texture> = {
  grass: grassTexture,
  dirt: dirtTexture,
  log: logTexture,
  glass: glassTexture,
  wood: woodTexture,
};

export default textures;
