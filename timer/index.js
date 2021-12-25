class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener("click", this.start);
  }
  start = () => {};
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("pause");
const timer = new Timer(durationInput, startButton, pauseButton);
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
