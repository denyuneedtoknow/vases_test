import { EVENTS_DEFAULT, LAYERS, rosesPosition } from "../variables";
import Rose from "./rose";

class Vases extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this.scene.add.existing(this);
    this.setDepth(LAYERS.VASES);
    this.addListeners();
    this.addVases();
    this.addDropzone();
    this.scene.time.delayedCall(0, this.addRoses.bind(this));
    this.redRosesPicked = 0;
    this.whiteRosesPicked = 0;
  }
  addListeners() {
    this.scene.emitter.on(
      EVENTS_DEFAULT.NEXT_LEVEL,
      this.restartRoses.bind(this)
    );
    this.scene.emitter.on(
      EVENTS_DEFAULT.FAILED,
      this.showSelectedAnswer.bind(this)
    );
  }
  addVases() {
    this.vases = this.scene.add.image(960, 540, "vases").setDepth(LAYERS.VASES);
  }
  addDropzone() {
    const zone = this.scene.add
      .zone(960, 340, 300, 800)
      .setRectangleDropZone(300, 600);
    // const graphics = this.scene.add.graphics();
    // graphics.lineStyle(2, 0xffff00);
    // graphics
    //   .strokeRect(
    //     zone.x - zone.input.hitArea.width / 2,
    //     zone.y - zone.input.hitArea.height / 2,
    //     zone.input.hitArea.width,
    //     zone.input.hitArea.height
    //   )
    //   .setDepth(LAYERS.VASES-1);
    this.add(zone);
      this.scene.input.on("dragenter", (pointer, gameObject, dropZone) => {
        gameObject.setDepth(LAYERS.ROSE); 
      this.checkRoses(gameObject.texture.key);
    //   graphics.clear();
    //   graphics.lineStyle(2, 0x00ffff);
    //   graphics.strokeRect(
    //     zone.x - zone.input.hitArea.width / 2,
    //     zone.y - zone.input.hitArea.height / 2,
    //     zone.input.hitArea.width,
    //     zone.input.hitArea.height
    //   );
    });
  }
  addRoses() {
    this.rosesArray = [];
    Object.entries(rosesPosition).forEach(([id, { x, y, color }]) => {
      const properties = {
        color: color,
        positionX: x,
        positionY: y,
        id: id,
      };
        this[`rose_${id}`] = new Rose(this.scene, properties)
      this.rosesArray.push(this[`rose_${id}`]);
      this.add(this[`rose_${id}`]);
    });
  }
  checkRoses(rose) {
    this.redNumberNeeded = this.scene.bg.data.get("red_roses_needed");
    this.whiteNumberNeeded = this.scene.bg.data.get("white_roses_needed");
    if (rose === "white_rose") {
      this.whiteRosesPicked++;
      console.log(this.whiteRosesPicked, "white");
    } else {
      this.redRosesPicked++;
      console.log(this.redRosesPicked, "red");
    }
    if (
      this.redNumberNeeded === this.redRosesPicked &&
      this.whiteNumberNeeded === this.whiteRosesPicked
    ) {
      console.log("level cleared");
      this.scene.bg.data.set("next_level_locked", false);
    } else {
      this.scene.bg.data.set("next_level_locked", true);
    }
  }
  restartRoses() {
    this.rosesArray.forEach((rose) => {
      rose.destroy();
    });
    this.redRosesPicked = 0;
    this.whiteRosesPicked = 0;
    this.addRoses();
  }
  showAnswer() {
    this.rosesArray.forEach((rose) => {
      rose.showDemo();
    });
  }
    showSelectedAnswer() {
      this.restartRoses()
    let redRosesShown = 0;
    let whiteRosesShown = 0;
    this.redNumberNeeded = this.scene.bg.data.get("red_roses_needed");
    this.whiteNumberNeeded = this.scene.bg.data.get("white_roses_needed");
    this.rosesArray.forEach((rose) => {
      if (
        rose.rose.texture.key === "red_rose" &&
        redRosesShown < this.redNumberNeeded
      ) {
        rose.showDemo();
        redRosesShown++;
      } else if (
        rose.rose.texture.key === "white_rose" &&
        whiteRosesShown < this.whiteNumberNeeded
      ) {
        rose.showDemo();
        whiteRosesShown++;
      }
    });
  }
}
export default Vases;
