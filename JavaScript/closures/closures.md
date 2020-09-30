# Closures

- A JavaScript closure is a function that has a pointer reference to a free variable
- A free variable is one that has fallen out of scope after its parent function has returned
- However, if that outer function still has some reference to the free variable (normally through a function that gets retured or method property), the variable will not get garbage collected because it will have a non-zero reference count
- Thus, from outside the function, we can still access the inner variable by means of closure

```javascript
// -------------------------------------------------------
// Example 1: getName is a closure
function Person(pName) {
  let _name = pName;
  this.getName = () => {
    return _name;
  };
}

var p1 = new Person("Patrick");
console.log(p1._name); // ==> undefined
console.log(p1.getName()); // ==> Patrick

// -------------------------------------------------------
// Example 2: innerFunction is a closure
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");
// ==>  Outer Variable: outside
//      Inner Variable: inside

// -------------------------------------------------------
// Example 3: inner is a closure
function foo() {
  const secret = Math.trunc(Math.random()*100)
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}
const f = foo() 
f()
// Secret is not directly accessible from foo
// The only way to retrieve secret is to invoke f
// -------------------------------------------------------
```

- Alternative way to think about this
    - When you have a function inside of another function, the inner function has access to the variables and scope of the outer function
    - Even if the outer function finishes executing and those variables are no longer accessible outside the function

