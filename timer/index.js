const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");
const peremeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", peremeter);
let currentOffset = 0;
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
    console.log("timer started");
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (peremeter * timeRemaining) / duration - peremeter
    );
    currentOffset = currentOffset - 1;
  },
  onComplete() {
    console.log("timer is completed");
  },
});

//timer.start();

//Determining the value of 'this'

// case 1: Did you call the arrow function=
// arrrow functions
// console.log(this);
// const printColors = () => {
//   console.log(this); // the result is equavalent to up above one line's this
// };

// // case 2: Did you call the function with call, bind or apply ?
// printColors();
// // call or apply
// console.log(this);
// const printName = function () {
//   console.log(this);
// };
// printName.call({ name: "Dilip" }); // now it prints name object

// // case 3: all other cases:
// const colors = {
//   printColorsName() {
//     console.log(this);
//   },
// };
// const randomObject = {
//   a: 1,
// };
// randomObject.printColorsName = colors.printColorsName;
// randomObject.printColorsName();
