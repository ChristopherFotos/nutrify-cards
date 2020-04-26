//To use this in the app, put it all in the componentDidMount method of the recipeCard component

let targets = document.querySelectorAll(".show-details");

targets.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (!e.target.expanded) {
      e.target.expanded = true;
      Array.from(e.target.parentElement.children[1].children).forEach((li) => {
        li.style.display = "block";
      });
      e.target.parentElement.children[1].classList.remove(
        "card-content-closed"
      );
      e.target.parentElement.children[1].classList.add("card-content-open");
      e.target.parentElement.classList.remove("card-closed");
      e.target.parentElement.classList.add("card-open");
    } else if (e.target.expanded) {
      e.target.expanded = false;
      Array.from(e.target.parentElement.children[1].children).forEach((li) => {
        li.style.display = "none";
      });
      e.target.parentElement.children[1].classList.remove("card-content-open");
      e.target.parentElement.children[1].classList.add("card-content-closed");
      e.target.parentElement.children[1].classList.remove("card-open");
      e.target.parentElement.classList.remove("card-open");
      e.target.parentElement.classList.add("card-closed");
    }
  });
});
