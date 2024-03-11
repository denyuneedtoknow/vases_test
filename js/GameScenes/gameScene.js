class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
      // Create your game world here using preloaded assets
      this.add.text(100, 100, "Hello World!");
  }
}
