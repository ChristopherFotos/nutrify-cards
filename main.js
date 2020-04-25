let targets = document.querySelectorAll(".card-content");

targets.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (!e.target.expanded) {
      e.target.expanded = true;
      console.log(e.target.expanded);
      e.target.children[1].classList.remove("card-content-closed");
      e.target.children[1].classList.add("card-content-open"); //here, instead of directly manipulating styles, just add and remove classes.
      e.target.classList.remove("card-closed");
      e.target.classList.add("card-open");
      console.log(
        "**TOGGLE ON:** ",
        e.target,
        e.target.classList,
        e.target.children[1].classList
      );
    } else if (e.target.expanded) {
      e.target.expanded = false;
      console.log(e.target.expanded);
      e.target.children[1].classList.remove("card-content-open");
      e.target.children[1].classList.add("card-content-closed"); //here, instead of directly manipulating styles, just add and remove classes.
      e.target.children[1].classList.remove("card-open");
      e.target.classList.remove("card-open");
      e.target.classList.add("card-closed");

      console.log(
        "**TOGGLE OFF:** ",
        e.target,
        e.target.classList,
        e.target.children[1].classList
      );
    }
  });
});
