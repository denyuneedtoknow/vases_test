class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    // Load all your assets here
  this.load.image("background", "./assets/images/bg.jpg");
  this.load.image("vases", "./assets/images/vases.png");
  this.load.image("red_rose", "./assets/images/red_rose.png");
  this.load.image("white_rose", "./assets/images/white_rose.png");
  this.load.image("treasure", "./assets/images/treasure.png");
  this.load.audio("fail", "./assets/sounds/fail.vaw");
    // Load more assets as needed
  }

  create() {
    // Proceed to the next scene after loading assets
    this.scene.start("GameScene");
  }
}
