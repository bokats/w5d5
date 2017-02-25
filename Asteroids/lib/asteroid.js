// Spacerock. It inherits from MovingObject.
const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");
const Bullet = require("./bullet");

DEFAULTS


const Asteroid = functions(options = {}) {
  options.color = DEFAULTS.COLOR;
  options.pos = options.pos;
  options.radius = DEFAULTS.RADUS;
  options.vel = options.vel;

  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);
