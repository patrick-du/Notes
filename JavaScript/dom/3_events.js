// Events

let button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

function buttonClick(e) {
  document.getElementById("header-title").textContent = "Changed";
  document.querySelector("#main").style.backgroundColor = "#f4f4f4";
  console.log(e);

  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList);

  let output = document.getElementById("output");
  output.innerHTML = "<h3>" + e.target.id + "</h3>";

  console.log(e.type);

  console.log(e.clientX); // Client is from window
  console.log(e.clientY);
  console.log(e.offsetX); // Offset is from element itself
  console.log(e.offsetY);

  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
}
