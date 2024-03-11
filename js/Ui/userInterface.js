import { LAYERS } from "../variables";
import CheckButton from "./checkButton";
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
    }
    addBg() {
        this.uiBg = this.scene.add
          .image(this.scene.scale.width / 2, this.scene.scale.height, "ui_bg")
          .setOrigin(0.5, 1);
        this.add(this.uiBg)
     }
    addTask() {
        this.task = new Task(this.scene)
     }
    addCheckBtn() {
        this.checkBtn = new CheckButton(this.scene);
     }
    addLevelIndicator() { }
}
export default UserInterface;