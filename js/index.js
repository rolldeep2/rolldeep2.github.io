const content = "안녕하세요. 저는 '";
const text = document.querySelector("#intro");
let a = 0;

function typing() {
  let txt = content[a++];

  text.innerHTML += txt;

  if (a > content.length) {
    text.textContent = "안녕하세요. 저는 '";
  }
}

setInterval(typing, 200);

let i = 0,
  j = 0;

const textArray = [
    "노력하는'",
    "공부하는'",
    "프론트엔드 개발자'",
    "이영우' 입니다.",
  ],
  speed = 200,
  target = document.getElementById("intro2");

function txtnum() {
  j == textArray.length - 1 ? (j = 0) : j++;
}

function type() {
  i < textArray[j].length
    ? ((target.innerHTML += textArray[j].charAt(i)),
      i++,
      setTimeout(type, speed))
    : textArray[j].length === 9
    ? clearTimeout(type)
    : remove();
}

function remove() {
  0 <= i
    ? ((target.innerHTML = target.innerHTML.slice(0, i)),
      i--,
      setTimeout(remove, speed))
    : (type(), txtnum());
}

setTimeout(type, 2200);












//여기부터 하면됨. 220511-2112 html 하나의 서클이니까 여러개로 맞춰서 코딩 
var bar = document.querySelector(".bar");
var value = document.querySelector(".value");

var RADIUS = 100;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function progress(per) {
  var progress = per / 100;
  var dashoffset = CIRCUMFERENCE * (1 - progress);

  bar.style.strokeDashoffset = dashoffset;
}

bar.style.strokeDasharray = CIRCUMFERENCE;

progress(90);
