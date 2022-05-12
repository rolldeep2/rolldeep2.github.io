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
var barHtml = document.querySelector(".bar-html");
var barCss = document.querySelector(".bar-css");
var barReact = document.querySelector(".bar-react");
var barJs = document.querySelector(".bar-js");
var barTs = document.querySelector(".bar-ts");
var barJava = document.querySelector(".bar-java");



var RADIUS = 15.5;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function progress(html, css, react, js, ts, java) {
  var progress = [
    html / 100,
    css / 100,
    react / 100,
    js / 100,
    ts / 100,
    java / 100,
  ];
  var dashoffset = [
    CIRCUMFERENCE * (1 - progress[0]),
    CIRCUMFERENCE * (1 - progress[1]),
    CIRCUMFERENCE * (1 - progress[2]),
    CIRCUMFERENCE * (1 - progress[3]),
    CIRCUMFERENCE * (1 - progress[4]),
    CIRCUMFERENCE * (1 - progress[5]),
  ];

  barHtml.style.strokeDashoffset = dashoffset[0];
  barCss.style.strokeDashoffset = dashoffset[1];
  barReact.style.strokeDashoffset = dashoffset[2];
  barJs.style.strokeDashoffset = dashoffset[3];
  barTs.style.strokeDashoffset = dashoffset[4];
  barJava.style.strokeDashoffset = dashoffset[5];
  
}

barHtml.style.strokeDasharray = CIRCUMFERENCE;
barCss.style.strokeDasharray = CIRCUMFERENCE;
barReact.style.strokeDasharray =CIRCUMFERENCE;
barJs.style.strokeDasharray =CIRCUMFERENCE;
barTs.style.strokeDasharray =CIRCUMFERENCE;
barJava.style.strokeDasharray =CIRCUMFERENCE;

progress(90, 90, 80, 80, 50, 70);
