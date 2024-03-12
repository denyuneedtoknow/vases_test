import UserInterface from "../Ui/userInterface";
import Vases from "../Ui/vases";
import EventDispatcher from "../eventDispatcher";
import { EVENTS_DEFAULT, LAYERS } from "../variables";

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
    this.emitter = EventDispatcher.Instance;
    this.currentLevel = 1;
  }

  create() {
    this.addListeners();
    this.addBg();
    this.generateTask();
    this.addVases();
    this.addUi();
  }
  addListeners() {
    this.emitter.on(EVENTS_DEFAULT.NEXT_LEVEL, this.updateLevel.bind(this));
  }
  addBg() {
    this.bg = this.add.image(960, 540, "bg").setDepth(LAYERS.BG);
    this.bg.setDataEnabled();
    this.bg.data.set("next_level_locked", true);
    this.bg.data.set("currentLevel", this.currentLevel);
    this.bg.data.set("totalFails", 0);
  

  }
  addVases() {
    this.vases = new Vases(this);
  }
  addUi() {
    this.ui = new UserInterface(this);
  }
  updateLevel() {
    if (this.currentLevel <= 5) {
      this.currentLevel++;
      console.log(this.currentLevel);
      this.bg.data.set("currentLevel", this.currentLevel);
      this.generateTask();
    }
  }
  generateTask() {
    let red = Phaser.Math.Between(1, 4);
    let white = Phaser.Math.Between(1, 4);
    this.bg.data.set("red_roses_needed", red);
    this.bg.data.set("white_roses_needed", white);
  }

}
export default MainScene;
