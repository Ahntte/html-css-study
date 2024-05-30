const body = document.body;
const btn = document.getElementById("btn");
const fntColor = document.getElementsByClassName("fnt-color");
const a = document.getElementsByClassName("box");
console.log(a);
const arry = [];
for (let i = 0; i < a.length; i++) {
  arry[i] = a[i];
}
console.log(arry);
// let isSatus = true;
let on = 0;
btn.addEventListener("click", function () {
  switch (on) {
    case 0:
      body.style.backgroundColor = "black";
      for (let i = 0; i < fntColor.length; i++) {
        fntColor[i].style.color = "white";
      }
      on = 1;
      break;

    case 1:
      body.style.backgroundColor = "white";
      for (let i = 0; i < fntColor.length; i++) {
        fntColor[i].style.color = "black";
      }
      on = 0;
      break;
  }
});
