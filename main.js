let targets = document.querySelectorAll(".card-content");

targets.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (!e.target.expanded) {
      e.target.expanded = true;
      console.log(e.target.expanded);
      e.target.children[1].style.height = "70%";
      e.target.children[1].style.opacity = "1";
      e.target.style.height = "100%";
    } else if (e.target.expanded) {
      e.target.expanded = false;
      console.log(e.target.expanded);
      e.target.children[1].style.height = "0";
      e.target.children[1].style.opacity = "0";
      e.target.style.height = "100%";
    }
  });
});
