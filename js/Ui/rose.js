import { LAYERS } from "../variables";

class Rose extends Phaser.GameObjects.Image {
  constructor(scene, properties) {
    super(scene);
    this.setDepth(LAYERS.ROSE);
    this.scene.add.existing(this);
    const { color, positionX, positionY, id } = properties;
    this.id = id;
    this.addFlower(color, positionX, positionY);
  }
  addFlower(color, positionX, positionY) {
    this.rose = this.scene.add
      .image(positionX, positionY, `${color}_rose`)
      .setInteractive();
    this.scene.input.setDraggable(this.rose);
    this.scene.input.on(
      "drag",
      function (pointer, gameObject, dragX, dragY) {
        if (gameObject === this.rose) {
          gameObject.x = dragX;
          gameObject.y = dragY;
        }
      },
      this
    );
  }
  destroy() {
    this.rose.destroy();
    return this;
  }
  showDemo() {
    let delta = Phaser.Math.Between(-100, +100);
    this.scene.tweens.add({
      targets: this.rose,
      x: this.scene.scale.width / 2 + delta,
      duration: 500,
    });
    return this;
  }
}
export default Rose;
