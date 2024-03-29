import { LAYERS } from "../variables";
import CheckButton from "./checkButton";
import LevelIndicator from "./levelIndicator";
import Result from "./result";
import Task from "./task";

class UserInterface extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this.scene.add.existing(this);
    this.setDepth(LAYERS.UI);
    this.addBg();
    this.addTask();
    this.addCheckBtn();
    this.addLevelIndicator();
    this.addResult();
  }
  addBg() {
    this.uiBg = this.scene.add
      .image(this.scene.scale.width / 2, this.scene.scale.height, "ui_bg")
      .setOrigin(0.5, 1);
    const fx = this.uiBg.postFX.addShine(1, 0.2, 5);
    this.add(this.uiBg);
  }
  addTask() {
    this.task = new Task(this.scene);
  }
  addCheckBtn() {
    this.checkBtn = new CheckButton(this.scene);
  }
  addLevelIndicator() {
    this.indicator = new LevelIndicator(this.scene);
  }
  addResult() {
    this.result = new Result(this.scene);
  }
}
export default UserInterface;
