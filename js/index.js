


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

const barHtml = document.querySelector(".bar-html");
const barCss = document.querySelector(".bar-css");
const barReact = document.querySelector(".bar-react");
const barJs = document.querySelector(".bar-js");
const barTs = document.querySelector(".bar-ts");
const barJava = document.querySelector(".bar-java");

let RADIUS = 15.5;
let CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function progress(html, css, react, js, ts, java) {
  const progress = [
    html / 100,
    css / 100,
    react / 100,
    js / 100,
    ts / 100,
    java / 100,
  ];
  const dashoffset = [
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
barReact.style.strokeDasharray = CIRCUMFERENCE;
barJs.style.strokeDasharray = CIRCUMFERENCE;
barTs.style.strokeDasharray = CIRCUMFERENCE;
barJava.style.strokeDasharray = CIRCUMFERENCE;

progress(90, 90, 80, 80, 50, 70);

const valueHtml = document.querySelector(".value-html");
const valueCss = document.querySelector(".value-css");
const valueReact = document.querySelector(".value-react");
const valueJs = document.querySelector(".value-js");
const valueTs = document.querySelector(".value-ts");
const valueJava = document.querySelector(".value-java");

var mql = window.matchMedia("screen and (max-width: 449px)");

if (!mql.matches) {
  

  function overHtml() {
    valueHtml.innerHTML = `<span style="font-weight:400; font-size:0.9rem; text-align:center">웹표준 기준 태그 <br> 시멘틱 태그, SVG <br> Canvas에 대한 이해 </span>`;
  }

  function leaveHtml() {
    valueHtml.innerHTML = `<h4>HTML</h4><span>90%</span>`;
  }

  function overCss() {
    valueCss.innerHTML = `<span style="font-weight:400; font-size:0.9rem; text-align:center">레이아웃, 스타일시트 <br> 미디어 쿼리, 애니메이션 <br> SCSS에 대한 이해</span>`;
  }

  function leaveCss() {
    valueCss.innerHTML = `<h4>CSS</h4><span>90%</span>`;
  }

  function overReact() {
    valueReact.innerHTML = `<span style="font-weight:400; font-size:0.9rem; text-align:center">React Hooks <br> Component <br> State에 대한 이해</span>`;
  }

  function leaveReact() {
    valueReact.innerHTML = `<h4>React</h4><span>90%</span>`;
  }
  function overJs() {
    valueJs.innerHTML = `<span style="font-weight:400; font-size:0.9rem; text-align:center">ES6 이상의 문법 <br> Event, Promise <br> prototype에 대한 이해</span>`;
  }

  function leaveJs() {
    valueJs.innerHTML = `<h4>JavaScript</h4><span>90%</span>`;
  }
  function overTs() {
    valueTs.innerHTML = `<span style="font-weight:400; font-size:0.9rem; text-align:center">Object, Return  <br> Interface, Union <br> 상속에 대한 이해</span>`;
  }

  function leaveTs() {
    valueTs.innerHTML = `<h4>TypeScript</h4><span>90%</span>`;
  }

  function overJava() {
    valueJava.innerHTML = `<span style="font-weight:400; font-size:0.9rem; text-align:center">객체지향 프로그래밍  <br> Spring 프레임워크 <br> JSP에 대한 이해</span>`;
  }

  function leaveJava() {
    valueJava.innerHTML = `<h4>Java</h4><span>90%</span>`;
  }
}


if (mql.matches) {
  
  $(document).on("click", ".nav-item a", function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(this.hash).offset().top - 30,
      },
      500
    );
  });
} else {
  $(document).on("click", ".nav-item a", function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(this.hash).offset().top - 150,
      },
      500
    );
  });
}

// $(document).ready(function ($) {
//   $(".scroll-move").click(function (event) {
//     event.preventDefault();

//     $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
//   });
// });

function navigo() {
  const header = document.querySelector("header");
  document.addEventListener("scroll", onScroll, { passive: true });
  function onScroll() {
    const scrollposition = scrollY;

    const nav = document.querySelector(".navbar");
    if (header.clientHeight <= scrollposition) {
      nav.classList.add("fix");
    } else {
      nav.classList.remove("fix");
    }
  }
}
navigo();
const trophy = document.querySelector(".trophy-modal");
function enterTrophy() {
  trophy.style.display = "flex";
}

function leaveTrophy() {
  trophy.style.display = "none";
}



console.log(mql.matches);
