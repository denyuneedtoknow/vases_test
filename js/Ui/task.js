import { LAYERS } from "../variables";

class Task extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this.scene.add.existing(this);
    this.setDepth(LAYERS.UI + 1);
    this.addListeners();
    this.addText();
    this.addRoses();
  }
  addListeners() {
    // this.scene.bg.data.on("changedata-red_roses_needed", () => {
    //   this.updateText.bind(this);
    // });
  }
  addText() {
    this.redNumber = this.scene.bg.data.get("red_roses_needed");
    this.whiteNumber = this.scene.bg.data.get("white_roses_needed");
    this.redText = this.scene.add
      .text(
        this.scene.scale.width / 2 - 200,
        this.scene.scale.height - 70,
        `Збери букет з ${this.redNumber}`,
        {
          fontSize: "50px",
          fill: "#FFF",
        }
      )
      .setOrigin(0.5, 1);
    this.whiteText = this.scene.add
      .text(
        this.scene.scale.width / 2 + 200,
        this.scene.scale.height - 70,
        `та ${this.whiteNumber}`,
        {
          fontSize: "50px",
          fill: "#FFF",
        }
      )
      .setOrigin(0.5, 1);

    this.add([this.redText, this.whiteText]);
  }
  addRoses() {
    this.redIcon = this.scene.add
      .image(
        this.scene.scale.width / 2 + 60,
        this.scene.scale.height - 35,
        "red_preview"
      )
      .setOrigin(0.5, 1);
    this.whiteIcon = this.scene.add
      .image(
        this.scene.scale.width / 2 + 320,
        this.scene.scale.height - 35,
        "white_preview"
      )
      .setOrigin(0.5, 1);
    this.add([this.redIcon, this.whiteIcon]);
  }
  updateText() {
    this.redText.destroy();
    this.whiteText.destroy();
    this.addText();
  }
}
export default Task;
