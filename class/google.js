const body = document.body;
const changeFont = document.getElementsByClassName("fnt-color");
const btn = document.getElementById("btn");

let on = 0;
btn.addEventListener("click", function () {
  switch (on) {
    case 0:
      body.style.backgroundColor = "black";
      for (let i = 0; i < changeFont.length; i++) {
        changeFont[i].style.color = "white";
      }
      on = 1;
      break;

    case 1:
      body.style.backgroundColor = "white";
      for (let i = 0; i < changeFont.length; i++) {
        changeFont[i].style.color = "black";
      }
      on = 0;
      break;
  }
});
