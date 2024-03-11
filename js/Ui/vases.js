import { LAYERS, rosesPosition } from "../variables";
import Rose from "./rose";

class Vases extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this.scene.add.existing(this);
    this.setDepth(LAYERS.VASES);
    this.addVases();
    this.addDropzone();
    this.scene.time.delayedCall(0, this.addRoses.bind(this));
  }
  addVases() {
    this.vases = this.scene.add.image(960, 540, "vases").setDepth(LAYERS.VASES);
  }
  addDropzone() {
    const zone = this.scene.add
      .zone(960, 340, 300, 800)
      .setRectangleDropZone(300, 600);
    const graphics = this.scene.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics
      .strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      )
      .setDepth(LAYERS.VASES + 2);
      this.add(zone);
      this.scene.input.on("dragenter", (pointer, gameObject, dropZone) => {
          console.log(gameObject);
        graphics.clear();
        graphics.lineStyle(2, 0x00ffff);
        graphics.strokeRect(
          zone.x - zone.input.hitArea.width / 2,
          zone.y - zone.input.hitArea.height / 2,
          zone.input.hitArea.width,
          zone.input.hitArea.height
        );
      });
  }
  addRoses() {
    Object.entries(rosesPosition).forEach(([id, { x, y, color }]) => {
      const properties = {
        color: color,
        positionX: x,
        positionY: y,
        id: id,
      };
      const rose = new Rose(this.scene, properties);
      this.add(rose);
    });
  }
}
export default Vases;
