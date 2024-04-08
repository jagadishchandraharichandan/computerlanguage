const buttons = document.querySelectorAll(".button");  //node list

function log(e, button) {
    console.log(e.target);
  if (e.target.id === button.id) {
    document.querySelector("body").style.backgroundColor = button.id;
  // alert ("jagadish chandra harichandan"); // for pupup we use alert// 
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", (e) => log(e, button));
  // alert ("jagadish chandra harichandan");
});

// addEventListener() //inbuild function
//todo ? whenyou click the 1st box pop up your name
function color() {
  var r = Math.floor(Math.random() * 10);
  var g = Math.floor(Math.random() * 10);
  var b = Math.floor(Math.random() * 10);
  var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}
var randomColor =color();
console.log(randomColor); 


// buttons[5].addEventListener("click", (e) =>
//   (document.querySelector("body").style.backgroundColor = color()
// ));
const interValid = setInterval(() => {
  document.querySelector("body").style.backgroundColor =color();
}, 1000);
 buttons[5].addEventListener ("click", () => clearInterval(interValid));