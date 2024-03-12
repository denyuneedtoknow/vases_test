/* global Phaser */

let instance = null;



export default class EventDispatcher extends Phaser.Events.EventEmitter {
  static get Instance() {
    if (instance === null) {
      instance = new EventDispatcher();
    }

    return instance;
  }
}
