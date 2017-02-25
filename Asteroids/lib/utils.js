// Utility code, especially vector math stuff.
// Function.prototype.inherits = function(SuperClass) {
//   this.prototype = Object.create(SuperClass.prototype);
//   this.prototype.constructor = this;
// };

const Util = {
  inherits (ChildClass, ParentClass) {
    ChildClass.prototype = Object.create(ParentClass.prototype);
    ChildClass.prototype.constructor = ChildClass;
  }
};

module.exports = Util;
