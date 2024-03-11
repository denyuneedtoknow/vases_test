import Phaser from "phaser";
import PreloadScene from "./GameScenes/preloadScene";
import MainScene from "./GameScenes/mainScene";



const config = {
  type: Phaser.AUTO,
  width: 1920,
  height:1080,
  scene: [PreloadScene, MainScene],
};

const game = new Phaser.Game(config);
