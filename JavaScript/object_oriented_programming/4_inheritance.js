// ES5

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Prototype methods
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Constuctor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate objects
const magazine1 = new Magazine("Magazine One", "John Doe", "2018", "Jan");

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(magazine1);
console.log(magazine1.getSummary());
