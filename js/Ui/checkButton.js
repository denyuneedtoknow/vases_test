import { Sound } from "phaser";
import { EVENTS_DEFAULT, LAYERS } from "../variables";

class CheckButton extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this.scene.add.existing(this);
    this.setDepth(LAYERS.UI + 2);
    this.addListeners();
    this.addButton();
    this.failCount = 0;
    this.isButtonNext = false;
    this.totalFails = 0;
  }
  addListeners() {
    this.scene.emitter.on(EVENTS_DEFAULT.NEXT_LEVEL, this.unlockBtn.bind(this));
  }

  addButton() {
    this.checkButton = this.scene.add.image(
      this.scene.scale.width - 250,
      this.scene.scale.height - 100,
      "check_btn"
    );
    this.checkButton
      .setInteractive()
      .on("pointerdown", this.regularClick.bind(this));

    this.add(this.checkButton);
  }
  regularClick() {
    this.checkButton.setTexture("check_btn");
    if (this.scene.bg.data.get("next_level_locked") === false) {
      this.scene.emitter.emit(EVENTS_DEFAULT.NEXT_LEVEL);
      this.scene.bg.data.set("next_level_locked", true);
    } else {
      console.log("locked");
      this.shakeBtn();
      this.failCount++;
      if (this.failCount === 2) {
        this.changeBtn();
        this.failCount = 0;
        this.scene.emitter.emit(EVENTS_DEFAULT.FAILED);
      }
    }
  }
  changeBtn() {
    this.totalFails++;
    console.log(this.totalFails, "fails");
    this.scene.bg.data.set("totalFails", this.totalFails);
    this.isButtonNext = true;
    this.checkButton
      .setTexture("next_btn")
      .off("pointerdown")
      .on("pointerdown", this.nextLevelClick.bind(this));
  }
  unlockBtn() {
    this.isButtonNext = false;
  }
  nextLevelClick() {
    console.log("click");
    this.scene.emitter.emit(EVENTS_DEFAULT.NEXT_LEVEL);
    this.checkButton
      .off("pointerdown")
      .on("pointerdown", this.regularClick.bind(this))
      .setTexture("check_btn");
  }
  shakeBtn() {
    const failSound = this.scene.sound.add("fail", { loop: false });
    this.scene.tweens.add({
      targets: this.checkButton,
      duration: 100,
      scaleX: 1.2,
      scaleY: 1.2,
      yoyo: true,
      angle: 10,
      onStart: () => {
        failSound.play();
      },
    });
  }
}

export default CheckButton;
