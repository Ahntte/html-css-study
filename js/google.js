const body = document.body;
const bodyStyle = getComputedStyle(body);
const changeFont = document.getElementsByClassName("fnt-color");
const btn = document.getElementById("btn");
const counTry = document.getElementById("country");
const copyRight = document.getElementById("copyright");
const footerWrap = document.getElementById("footer-wrap");
const logoImage = document.getElementById("logo");
const searchBtn = document.getElementById("srhbtn");
const luckyBtn = document.getElementById("luckybtn");
const lupe = document.getElementById("position-item-lupe");
const mic = document.getElementById("position-item-mic");
const btnGroup = document.getElementsByClassName("buttonGroup");
let check = null;
let toggle = 0;

//클릭시, 바디의 background-color가 black - rgb(32, 33, 36)값으로 바뀌면 그 조건을 이용해볼것
//버튼의 스타일을 바꿔주는 함수를 만들어서 필요시 호출하는 식으로 설계해볼것

// 첫번째 문제는 '다크모드'라는걸 어떻게 조건으로 표현할까?
// 모든 동작은 버튼을 '클릭시' 이루어진다 <-전체조건
// 클릭이 동작의 전체조건이라면 부분조건은 배경이 검정이되는것과 흰색이되는것
// 두번째 문제는 다시 검정에서 흰색으로 돌아갈때 기존 박스-쉐도우 속성을 유지시켜야하는데 문제가 많아 고민중

function showShadow(check) {
  //버튼에 그림자를 생성해주는 함수
  console.log(check);
  console.log("생성함수실행됨");
  if (check == "rgb(32, 33, 36)") {
    //바디의 배경색이 검정이면
    for (let i = 0; i < btnGroup.length; i++) {
      btnGroup.item(i).addEventListener("mouseover", function () {
        btnGroup.item(i).style.boxShadow = "1px 1px 7px white";
      });
    }
  }
}

function removeShadow(uncheck) {
  //버튼에 그림자를 삭제하는 함수
  console.log(uncheck);
  console.log("삭제함수실행됨");
  if (uncheck == "rgb(32, 33, 36)") {
    //바디의 배경색이 검정이면 (생성이던 삭제던 동일조건)
    for (let i = 0; i < btnGroup.length; i++) {
      btnGroup.item(i).addEventListener("mouseout", function () {
        btnGroup.item(i).style.boxShadow = "none";
      });
    }
  }
}

function removeEvent(del) {
  // 이벤트리스너 삭제
  console.log(del);
  console.log("리스너삭제함수진입");
  if (del == "white") {
    // 배경이 하얀색이면
    console.log("삭제 if문 진입");
    for (let d = 0; d < btnGroup.length; d++) {
      btnGroup[d].removeEventListener("mouseover", showFunc);
      btnGroup[d].removeEventListener("mouseout", removeFunc);
    }
  }
  console.log("이벤트리스너 삭제완료");
}

// 문제점: 검은바탕에서 다시 흰바탕으로 갈때 원래 쉐도우 스타일로 돌아가야하는데 방법을 고민중이다

// 아이콘 '클릭'시 발생하는 이벤트리스너
btn.addEventListener("click", function () {
  switch (toggle) {
    case 0:
      body.style.backgroundColor = "#202124";
      logoImage.src = "./assets/google-dark-mode-logo.png";
      searchBtn.style.backgroundColor = "#303134";
      searchBtn.style.color = "#fff";
      luckyBtn.style.backgroundColor = "#303134";
      luckyBtn.style.color = "#fff";
      counTry.style.backgroundColor = "#171717";
      counTry.style.borderBottomColor = "#535658";
      lupe.style.color = "#171717";
      mic.style.color = "#171717";
      copyRight.style.backgroundColor = "#171717";
      footerWrap.style.color = "white";
      for (let i = 0; i < changeFont.length; i++) {
        changeFont[i].style.color = "white";
      }
      toggle = 1;
      showFunc = showShadow(body.style.backgroundColor);
      removeFunc = removeShadow(body.style.backgroundColor);
      console.log("검정 상태");
      break;

    case 1:
      body.style.backgroundColor = "white";
      logoImage.src = "./assets/googlelogo.png";
      searchBtn.style.backgroundColor = "#f8f9fa";
      searchBtn.style.color = "#000";
      luckyBtn.style.color = "#000";
      luckyBtn.style.backgroundColor = "#f8f9fa";
      counTry.style.backgroundColor = "#f2f2f2";
      counTry.style.borderBottomColor = "#dadce0";
      lupe.style.color = "#d2d2d2";
      mic.style.color = "#d2d2d2";
      copyRight.style.backgroundColor = "#f2f2f2";
      footerWrap.style.color = "#000";
      for (let i = 0; i < changeFont.length; i++) {
        changeFont[i].style.color = "black";
      }
      toggle = 0;
      removeEvent(body.style.backgroundColor);
      break;
  }
});
