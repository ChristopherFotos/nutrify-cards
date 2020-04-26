//To use this in the app, put it all in the componentDidMount method of the recipeCard component

let targets = document.querySelectorAll(".card-content");

targets.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (!e.target.expanded) {
      e.target.expanded = true;
      Array.from(e.target.children[1].children).forEach((li) => {
        li.style.display = "block";
      });
      e.target.children[1].classList.remove("card-content-closed");
      e.target.children[1].classList.add("card-content-open");
      e.target.classList.remove("card-closed");
      e.target.classList.add("card-open");
    } else if (e.target.expanded) {
      e.target.expanded = false;
      Array.from(e.target.children[1].children).forEach((li) => {
        li.style.display = "none";
      });
      e.target.children[1].classList.remove("card-content-open");
      e.target.children[1].classList.add("card-content-closed");
      e.target.children[1].classList.remove("card-open");
      e.target.classList.remove("card-open");
      e.target.classList.add("card-closed");
    }
  });
});
