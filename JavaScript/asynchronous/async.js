const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createCallbackPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

const createPromisePost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      !error ? resolve() : reject("Error: Something went wrong");
    }, 2000);
  });
};

// Callbacks
createCallbackPost(
  { title: "Post Three", body: "This is post three" },
  getPosts
);

// Single Promise
createPromisePost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

// Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "Goodbye")
);
const promise4 = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((res) => res.json());

Promise.all([promise1, promise2, promise3, promise4])
  .then((values) => {
    console.log(values);
  })
  .catch((e) => {
    console.log(e);
  });

// Async / Await
const init = async () => {
  await createPromisePost({ title: "Post Three", body: "This is post three" });
  getPosts();
};

init();

// Async / Await / Fetch
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

fetchUsers();
