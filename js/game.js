
let gameScene = new Phaser.Scene("Game");
gameScene.preload = function () {


};
gameScene.init = function () {};

gameScene.create = function () {
 
};
gameScene.update = function () {

};
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  scene: [PreloadScene, MainScene],
  pixelArt: false,
  title: "Vases",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 20 },
      debug: true,
    },
  },
};
let game = new Phaser.Game(config);
