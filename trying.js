var c = document.getElementsByClassName("JOHN")[0].children;
console.log(c);
var a = document.getElementById("name");
a.addEventListener("focus", (e) => {
  e.target.style.background = "pink";
  for (var i = 0; i < c.length; i++) {
    if (c[i].className == "important") {
      c[i].classList.add("shape");
      console.log(c[i]);
    }
    e.stopPropagation();
  }
});
a.addEventListener("blur", (e) => {
  e.target.style.background = "white";
});
