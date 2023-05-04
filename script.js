async function addNavbar() {
  const resp = await fetch("https://smc-26.github.io/sciencefair2023/navbar.html");
  const html = await resp.text();
  document.body.insertAdjacentHTML("afterbegin", html);
}

var btnDen = document.getElementById("btn-den");


var btns = btnDen.getElementsByClassName("topic-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += "active";
  });
}

var main_part = document.getElementById("main-part");
var main_desc = document.getElementById("main-desc");
var main_text = document.getElementById("main-text");

const parts = ["placeholder", "bio-essay", "chem-essay", "phys-essay", "usage-essay", "signi-essay", "ref-essay"];
var current = 1;

title.innerHTML = document.getElementById("bio-des").innerHTML;
grouptext.innerHTML = document.getElementById("bio-essay").innerHTML;


function showTopic(index) {
  current = index;
  title.innerHTML = document.getElementById(parts[current] + "-des").innerHTML;
  grouptext.innerHTML = document.getElementById(parts[current] + "-essay").innerHTML;
}

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
  ) {
      mybutton.style.visibility = "visible";
      mybutton.style.opacity = "1";
  } else {
      mybutton.style.visibility = "hidden";
      mybutton.style.opacity = "0";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}