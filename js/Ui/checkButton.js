import { LAYERS } from "../variables";

class CheckButton extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this.scene.add.existing(this);
    this.setDepth(LAYERS.UI + 2);
    this.addButton();
  }
  addButton() {
    this.CheckButton = this.scene.add
      .image(
        this.scene.scale.width -200,
        this.scene.scale.height-70,
        "check_btn"
      )
      .setInteractive()
        .on("pointerdown", this.onClick.bind(this));
      this.add(this.CheckButton);
  }
  onClick() {
    console.log("click");
  }
}

export default CheckButton;
