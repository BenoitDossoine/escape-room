import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import { EventDispatcher, Quaternion, Vector3 } from 'three';
import { store } from '../../store/store';

function contextmenu(event) {
  event.preventDefault();
}

class FlyControls extends EventDispatcher {
  constructor(object, _domElement) {
    super();

    _defineProperty(this, "object", void 0);

    _defineProperty(this, "domElement", null);

    _defineProperty(this, "movementSpeed", 1.0);

    _defineProperty(this, "rollSpeed", 0.5);

    _defineProperty(this, "dragToLook", false);

    _defineProperty(this, "autoForward", false);

    _defineProperty(this, "changeEvent", {
      type: 'change'
    });

    _defineProperty(this, "EPS", 0.000001);

    _defineProperty(this, "tmpQuaternion", new Quaternion());

    _defineProperty(this, "mouseStatus", 0);

    _defineProperty(this, "movementSpeedMultiplier", 1);

    _defineProperty(this, "moveState", {
      up: 0,
      down: 0,
      left: 0,
      right: 0,
      forward: 0,
      back: 0,
      pitchUp: 0,
      pitchDown: 0,
      yawLeft: 0,
      yawRight: 0,
      rollLeft: 0,
      rollRight: 0
    });

    _defineProperty(this, "moveVector", new Vector3(0, 0, 0));

    _defineProperty(this, "rotationVector", new Vector3(0, 0, 0));

    _defineProperty(this, "keydown", event => {
      if (event.altKey || store.zoomedIn || store.gameProgress.capacitorClicked || store.gameEnded || store.gameLost) {
        return;
      }

      switch (event.code) {
        case 'ArrowLeft':
          this.moveState.yawLeft = 1;
          break;

        case 'ArrowRight':
          this.moveState.yawRight = 1;
          break;
      }

      this.updateMovementVector();
      this.updateRotationVector();
    });

    _defineProperty(this, "keyup", event => {
      switch (event.code) {
        case 'ArrowLeft':
          this.moveState.yawLeft = 0;
          break;

        case 'ArrowRight':
          this.moveState.yawRight = 0;
          break;
      }

      this.updateMovementVector();
      this.updateRotationVector();
    });

    _defineProperty(this, "lastQuaternion", new Quaternion());

    _defineProperty(this, "lastPosition", new Vector3());

    _defineProperty(this, "update", delta => {
      const moveMult = delta * this.movementSpeed;
      const rotMult = delta * this.rollSpeed;
      this.object.translateX(this.moveVector.x * moveMult);
      this.object.translateY(this.moveVector.y * moveMult);
      this.object.translateZ(this.moveVector.z * moveMult);
      this.tmpQuaternion.set(this.rotationVector.x * rotMult, this.rotationVector.y * rotMult, this.rotationVector.z * rotMult, 1).normalize();
      this.object.quaternion.multiply(this.tmpQuaternion);

      if (this.lastPosition.distanceToSquared(this.object.position) > this.EPS || 8 * (1 - this.lastQuaternion.dot(this.object.quaternion)) > this.EPS) {
        this.dispatchEvent(this.changeEvent);
        this.lastQuaternion.copy(this.object.quaternion);
        this.lastPosition.copy(this.object.position);
      }
    });

    _defineProperty(this, "updateMovementVector", () => {
      const forward = this.moveState.forward || this.autoForward && !this.moveState.back ? 1 : 0;
      this.moveVector.x = -this.moveState.left + this.moveState.right;
      this.moveVector.y = -this.moveState.down + this.moveState.up;
      this.moveVector.z = -forward + this.moveState.back;
    });

    _defineProperty(this, "updateRotationVector", () => {
      this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
      this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
      this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft;
    });

    _defineProperty(this, "getContainerDimensions", () => {
      if (this.domElement != document && !(this.domElement instanceof Document)) {
        return {
          size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
          offset: [this.domElement.offsetLeft, this.domElement.offsetTop]
        };
      } else {
        return {
          size: [window.innerWidth, window.innerHeight],
          offset: [0, 0]
        };
      }
    });

    _defineProperty(this, "connect", domElement => {
      this.domElement = domElement;

      if (domElement && !(domElement instanceof Document)) {
        domElement.setAttribute('tabindex', -1);
      }

      this.domElement.addEventListener('contextmenu', contextmenu);
      this.domElement.addEventListener('pointermove', this.pointermove);
      this.domElement.addEventListener('pointerdown', this.pointerdown);
      this.domElement.addEventListener('pointerup', this.pointerup);
      window.addEventListener('keydown', this.keydown);
      window.addEventListener('keyup', this.keyup);
    });

    _defineProperty(this, "dispose", () => {
      this.domElement.removeEventListener('contextmenu', contextmenu);
      this.domElement.removeEventListener('pointermove', this.pointermove);
      this.domElement.removeEventListener('pointerdown', this.pointerdown);
      this.domElement.removeEventListener('pointerup', this.pointerup);
      window.removeEventListener('keydown', this.keydown);
      window.removeEventListener('keyup', this.keyup);
    });

    this.object = object; // connect events

    if (_domElement !== undefined) this.connect(_domElement);
    this.updateMovementVector();
    this.updateRotationVector();
  }

}

export { FlyControls };
