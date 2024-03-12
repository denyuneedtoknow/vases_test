import { EVENTS_DEFAULT, LAYERS } from "../variables";

class LevelIndicator extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this.scene.add.existing(this);
    this.addListeners();

    this.setDepth(LAYERS.UI + 3);
    this.addIndicator();
  }
  addListeners() {
    this.scene.emitter.on(EVENTS_DEFAULT.NEXT_LEVEL, this.update.bind(this));
  }
  addIndicator() {
    this.level = this.scene.bg.data.get("currentLevel");
    this.levelIndicator = this.scene.add.image(
      this.scene.scale.width / 2,
      this.scene.scale.height - 205,
      `level_${this.level}`
    );
    this.add(this.levelIndicator);
  }
  update() {
    this.level = this.scene.bg.data.get("currentLevel");
    if (this.level <= 5) {
      this.levelIndicator.setTexture(`level_${this.level}`);
    }
  }
}

export default LevelIndicator;
