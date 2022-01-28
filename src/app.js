function best() {
  let name = prompt("What is your name?");
  let panDulce = prompt("What is the best pan dulce?");

  if (panDulce === "conchas") {
    alert(
      "Yes " + name + ", you are so right! Conchas ARE the best pan dulce! 💕"
    );
  } else {
    alert(
      "Sorry " +
        name +
        ", conchas are the best pan dulce! I don't make the rules. 🤷🏻‍♀️"
    );
  }
}
let button = document.querySelector("button");
button.addEventListener("click", best);
