/**
 * @author WestLangley / http://github.com/WestLangley
 * @author qiao / http://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author michael-dufresne / http://github.com/michael-dufresne
 */

THREE.OrbitControls = function (object, domElement) {
  // Set up everything
  this.object = object;
  this.domElement = (domElement !== undefined) ? domElement : document;

  // API
  this.enabled = true;

  this.target = new THREE.Vector3();

  this.minDistance = 0;
  this.maxDistance = Infinity;

  this.minZoom = 0;
  this.maxZoom = Infinity;

  this.minPolarAngle = 0; // radians
  this.maxPolarAngle = Math.PI; // radians

  this.minAzimuthAngle = - Infinity; // radians
  this.maxAzimuthAngle = Infinity; // radians

  this.enableDamping = false;
  this.dampingFactor = 0.25;

  this.enableZoom = true;
  this.zoomSpeed = 1.0;

  this.enableRotate = true;
  this.rotateSpeed = 1.0;

  this.enablePan = true;
  this.panSpeed = 1.0;
  this.screenSpacePanning = false;

  this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

  this.autoRotate = false;
  this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

  this.enableKeys = true;
  this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

  this.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };

  // for reset
  this.target0 = this.target.clone();
  this.position0 = this.object.position.clone();
  this.zoom0 = this.object.zoom;

  // rest of OrbitControls logic intentionally trimmed for brevity in this sample
  // you can find the full source at https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.js
};
