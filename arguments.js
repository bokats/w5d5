// function sum(...args) {
//   let totalSum = 0;
//   args.forEach (num => {
//     totalSum += num;
//   });
//   return totalSum;
// }
//
// // console.log(sum(1, 2, 3, 4));
//
Function.prototype.myBind = function(initialObj) {
  const func = this;
  const outerArgs = Array.from(arguments).slice(1);
  return function() {
    const innerArgs = Array.from(arguments);
    return func.apply(initialObj, outerArgs.concat(innerArgs));
  };
};

// // Function.prototype.myBind = function (ctx) {
// //   const fn = this;
// //   const bindArgs = Array.from(arguments).slice(1);
// //   return function () {
// //     const callArgs = Array.from(arguments);
// //     return fn.apply(ctx, bindArgs.concat(callArgs));
// //   };
// // };
//
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush");
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true


Function.prototype.curry = function(numOfArgs) {
  const func = this;

};
