
import bgPath from "../../assets/images/bg.jpg";
import vasesPath from "../../assets/images/vases.png";
import redRosePath from "../../assets/images/red_rose.png";
import whiteRosePath from "../../assets/images/white_rose.png";
import redPreviewPath from "../../assets/images/red_preview.png";
import whitePreviewPath from "../../assets/images/white_preview.png";
import uiBgPath from "../../assets/images/ui_bg.png";
import checkBtn from "../../assets/images/check_btn.png";
import nextBtn from "../../assets/images/next_btn.png";
import level1Path from "../../assets/images/level_1.png";
import level2Path from "../../assets/images/level_2.png";
import level3Path from "../../assets/images/level_3.png";
import level4Path from "../../assets/images/level_4.png";
import level5Path from "../../assets/images/level_5.png";
import failPath from "../../assets/sounds/fail.wav";
import successPath from "../../assets/sounds/success.wav";
class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadScene" });
  }

  preload() {
    this.load.image("bg", bgPath);
    this.load.image("vases", vasesPath);
    this.load.image("red_rose", redRosePath);
    this.load.image("white_rose", whiteRosePath);
    this.load.image("red_preview", redPreviewPath);
    this.load.image("white_preview", whitePreviewPath);
    this.load.image("ui_bg", uiBgPath);
    this.load.image("check_btn", checkBtn);
    this.load.image("next_btn", nextBtn);
    this.load.image("level_1", level1Path);
    this.load.image("level_2", level2Path);
    this.load.image("level_3", level3Path);
    this.load.image("level_4", level4Path);
    this.load.image("level_5", level5Path);
    this.load.audio("fail", failPath);
    this.load.audio("success", successPath);
  }

  create() {
    this.scene.start("MainScene");
  }
}
export default PreloadScene;
