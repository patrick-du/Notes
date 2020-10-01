# Document Object Model (DOM)

![alt text](https://www.w3schools.com/js/pic_htmltree.gif)

---

## What is the DOM

- Object Oriented Representation of the web page which can be modified with a scripting language - most commonly, JavaScript
- Consists of a tree of nodes/elements created by the browser
- Acts as a programming interface for HTML & XML documents
- JavaScript uses the DOM to access the document and its elements

## Fundamental Data Types

- `Document`
  - The root document object
- `Node`
  - Every object located within a document is a node
  - Types: ELEMENT_NODE, ATTRIBUTE_NODE, TEXT_NODE, etc...
- `Element`
  - A node of type `element`
  - Inherits from the generic `Node` interface
  - Every element is a node but not every node is an element
- `NodeList`
  - Array of elements similar to the return of `.querySelectorAll()`
- `Attribute`
- `NamedNodeMap`

## Core Interfaces in the DOM

### Document Properties

- document.domain
- document.URL
- document.title
- document.doctype
- document.head
- document.body
- document.all
- document.forms
- document.links
- document.images

### Document Selectors

- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.querySelector()
- document.querySelectorAll()

### DOM Traversal
- Parent
    - .parentNode
    - .parentElement
- Children
    - .childNodes
    - .children
    - .firstChild
    - .firstElementChild
    - .lastChild
    - .lastElementChild
- Siblings
    - .nextSibling
    - .nextElementSibling
    - .previousSibling
    - .previousElementSibling
- Creating an element and inserting it into the DOM
    ```javascript
    let container = document.querySelector("header .container");
    let h1 = document.querySelector("header h1");

    let newDiv = document.createElement("div");
    let newDivText = document.createTextNode("Hello world");

    newDiv.appendChild(newDivText);

    container.insertBefore(newDiv, h1);
    ```

## Resources

- [MDN - Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#DOM_and_JavaScript)
- [MDN - DOM Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
