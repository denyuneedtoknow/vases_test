import { EVENTS_DEFAULT, LAYERS } from "../variables";

class Result extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this.scene.add.existing(this);
    this.setDepth(LAYERS.UI + 5);
    this.addListeners();
  }
  addListeners() {
    this.scene.emitter.on(EVENTS_DEFAULT.FINISH, this.addText.bind(this));
    this.scene.bg.on("changedata-currentLevel", this.console.bind(this));
  }
  addText() {
    this.result = 100 - this.fails * 20;
    this.resultText = this.scene.add
      .text(
        this.scene.scale.width / 2,
        this.scene.scale.height / 2,
        `Твій результат ${this.result} %`,
        {
          fontSize: "150px",
          fill: "#ff0000",
        }
      )
      .setOrigin(0.5, 1);

    this.add([this.resultText]);
  }
  console() {
    this.fails = this.scene.bg.data.get("totalFails");
    this.currentLevel = this.scene.bg.data.get("currentLevel");
    console.log(this.fails, "totalFails");
    if (this.currentLevel > 5) {
      this.scene.emitter.emit(EVENTS_DEFAULT.FINISH);

      this.addText();
      const resultSound = this.scene.sound.add("success", { loop: false });
      resultSound.play();
    }
  }
}
export default Result;
