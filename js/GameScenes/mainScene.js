import UserInterface from "../Ui/userInterface";
import Vases from "../Ui/vases";
import { LAYERS } from "../variables";

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }

  create() {
    this.addBg();
    this.addVases();
    this.addUi();
  }

  addBg() {
    this.bg = this.add.image(960, 540, "bg").setDepth(LAYERS.BG);
    console.log(this.bg.depth, "bg");
    this.bg.setDataEnabled();
    this.bg.data.set("red_roses_needed", 5);
    this.bg.data.set("white_roses_needed", 2);
  }
  addVases() {
    this.vases = new Vases(this);
    console.log(this.vases);
  }
  addUi() {
    this.ui = new UserInterface(this);
  }
}
export default MainScene;
