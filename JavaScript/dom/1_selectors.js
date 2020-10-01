// DOM selector examples
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// - document.querySelector()
// - document.querySelectorAll()

// To examine the document object
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
console.log(document.images);

// getElementById
let headerTitle = document.getElementById("header-title");
console.log(headerTitle);

headerTitle.textContent = "Hello"; // textContent shows all elements in the node
headerTitle.innerText = "Goodbye"; // innerText shows the rendered text content - aware of styling
headerTitle.innerHTML = '<h3 style="color: red">Hello</h3>'; // innerHTML places HTML inside the DOM element
headerTitle.style.borderBottom = "solid 3px #000";

// getElementsByClassName

let items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[0]);
items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}

// getElementsByTagName

let li = document.getElementsByTagName("li");
console.log(li);
console.log(li[0]);
li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "orange";
}

// querySelector

let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

let input = document.querySelector("input");
input.value = "Hello World";

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

let item = document.querySelector(".list-group-item");
item.style.color = "red";

let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "red";

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "coral";

// querySelectorAll

let titles = document.querySelectorAll("title");
console.log(titles);
titles[0].textContent = "Wow";

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}
