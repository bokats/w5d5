const Util = require("./util");
// Base class for anything that moves.
// Most important methods are MovingObject.prototype.move,
      // MovingObject.prototype.draw(ctx),
      // MovingObject.prototype.isCollidedWith(otherMovingObject).

const MovingObject = function({pos, vel, radius, color}) {
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
};

// const mo = new MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
// );

MovingObject.prototype.draw = function(pos, radius, color) {
  return new MovingObject(
    pos[0] * Math.random(),
    pos[1] * Math.random(),
    radius,
    color
  );
};


MovingObject.prototype.move = function(maxX, maxY) {
  this.pos[0] = this.pos[0] + (this.vel[0] * 0.1) % maxX;
  this.pos[1] = this.pos[1] + (this.vel[0] * 0.1) % maxY;
};

module.exports = MovingObject;
