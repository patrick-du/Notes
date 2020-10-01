// Traversing the DOM
// - Parents: .parentNode, .parentElement
// - Children: .childNodes, .children, .firstChild, .firstElementChild, .lastChild, .lastElementChild
// - Siblings: .nextSibling, .nextElementSibling, .previousSibling, .previousElementSibling
// - Create Elements: .createElement(), .createTextNode(), .appendChild()
// - Insertion: .insertBefore()

// Traversing with nodes will give you nodes of all type including TEXT_NODE (even whitespaces)
// Traversing with elements will only give you element nodes (ELEMENT_NODE)

let itemList = document.querySelector("#items");

// Parent Node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// Parent Element
console.log(itemList.parentElement);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// Child Nodes & Children Elements
console.log(itemList.childNodes);
console.log(itemList.childEls);

// Children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

// First Child & First Element Child
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

// Last Child & Last Element Child
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);

// Next Sibling & Next Element Sibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

// Previous Sibling & Previous Element Sibling
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

// Create a div
let newDiv = document.createElement("div");
newDiv.className = "hello"; // add class
newDiv.id = "hello1"; // add id
newDiv.setAttribute("title", "Hello Div"); // add attribute

// Create text node
let newDivText = document.createTextNode("Hello world");

// Add text node to div
newDiv.appendChild(newDivText);

// Add div to DOM
let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);
