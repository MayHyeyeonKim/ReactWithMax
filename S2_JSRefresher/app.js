"use strict";

// ===== helper =====

const hr = (title) => {
  console.log("\n" + "—".repeat(12) + " " + title + " " + "—".repeat(12));
};

// ===== string =====

hr("string");
const s = "Hello";
console.log(
  "length:",
  s.length,
  " ",
  "Uppercase:",
  s.toUpperCase(),
  " ",
  "Lowercase:",
  s.toLowerCase(),
  " ",
  "Includes'l':",
  s.includes("ll"),
  " ",
  "Slice:",
  s.slice(0, 2)
);

// ===== Array & Methods =====
hr("Array & Methods");
const arr = ["apple", "banana", "cherry"];
console.log("Array:", arr);
const arrPush = [...arr, "watermelon"];
const arrPush2 = arrPush.push("orange");
console.log("arrPush:", arrPush);
console.log("arrPush2:", arrPush2); // 5 returns the new length of the array
console.log("map:", arr.map((item) => "I love " + item + ".").join("\n"));

// ===== Objects =====
const user = { name: "May", age: 600 };
user.role = "admin";
console.log("May: ", user.name, " Age: ", user.age, " Role: ", user.role);
console.log(
  Object.keys(user),
  "\n",
  Object.values(user),
  "\n",
  user?.name ? user.name : "no name",
  "\n",
  user?.address?.city ?? "no city"
);

// ==== Map (JS built-in) & map (array) ====
hr("Map object");

const m = new Map();
m.set("a", 1).set("b", 2);
m.set("c", 3);
console.log(m.get("a"), m.get("b"));
console.log(m.has("c"));
console.log([...m.entries()]);

// ==== Functions / Arrow / Default / Rest ====
hr("Functions");

function add(a, b) {
  return a + b;
}

const mul = (a, b) => a * b;

const sumAll = (...nums) => nums.reduce((s, n) => s + n, 0);

console.log("Add: ", add(1, 2));
console.log("Mul: ", mul(3, 4));
console.log("sumAll: ", sumAll(1, 2, 3, 4));

// ==== callback & HOF: Higher Order Function ====

hr("Callback & HOF");

const numbers = [1, 2, 3, 4, 5];

const double = (n) => n * 2;
console.log(numbers.map(double));
console.log(numbers.filter((n) => n % 2 === 0));
console.log(numbers.filter((n) => n % 2 !== 0));

// ===== Operators =====
hr("Operators");

const a = 10;
const b = 20;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % 3);

// ===== Conditional (Ternary) Operator =====
hr("Conditional Operator");

const age = 60;

const canVote = age >= 18 ? "Yes, can vote." : "No, cannot vote.";
console.log(canVote);

const multiTernary =
  age < 8 ? "kid" : age < 18 ? "teen" : age < 60 ? "adult" : "senior";
console.log(multiTernary);

// ==== Spread & Rest Operators ====
hr("Spread & Rest Operators");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined Array:", combined); // [ 1, 2, 3, 4, 5, 6 ]

const combinedwithOutSpread = arr1.concat(arr2);
console.log("Combined without Spread:", combinedwithOutSpread); // [ 1, 2, 3, 4, 5, 6 ]

/**
 * The default behavior of concat and the spread operator is to merge arrays by one level (shallow merge).
 */

const nested = [arr1, arr2]; // array literal
console.log("Nested Array:", nested); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// ==== Closure ====
hr("Closure");

function makeCounter(start = 0) {
  let count = start; // internal state not accessible from outside
  return () => ++count; // this function has access to the internal state
}

const counter = makeCounter(10);
console.log("Counter:", counter()); // 11
console.log("Counter:", counter()); // 12

/**
 * lexical scoping allows inner functions to access variables from outer functions
 * closures are functions that remember their lexical scope even when the function is executed outside that scope
 * lexical meaning is that the function remembers the environment in which it was created
 */

// ==== Nested Functions ====
hr("Nested Functions");

function outer(x) {
  function inner(y) {
    return x + y; // inner can access outer's parameter
  }
  return inner(5); // calls inner with 5
}

console.log("Outer Result:", outer(3)); // 8

// ==== Loops ====
hr("Loops");

for (let i = 0; i < 3; i++) console.log("for", i);
for (const n of [10, 20, 30]) console.log("for...of", n);
for (const k in { a: 1, b: 2 }) console.log("for...in", k);

let w = 0;
while (w < 2) {
  console.log("while", w);
  w++;
}

// ==== Conditionals (if / switch) ====
hr("Conditionals");

const score = 85;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else console.log("C");

switch (new Date().getDay()) {
  case 0:
    console.log("Sun");
    break;
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  default:
    console.log("Unknown day");
}

// ==== Expression vs Statement ====
hr("Expression vs Statement");

const val = (3 + 4) * 2; // expression

if (val > 10) {
  // statement block
  console.log("Value is greater than 10");
}

// ==== setTimeout ====
hr("setTimeout");

// setTimeout(() => {
//   console.log("This runs after 6  second");
// }, 6000);

/**
 * setTimeout is a function that executes a callback after a specified delay
 */

// ==== setInterval ====
hr("setInterval");

// let countDown = 5;
// const intervalId = setInterval(() => {
//   console.log("Countdown:", countDown);
//   countDown--;
//   if (countDown < 0) {
//     clearInterval(intervalId);
//     console.log("Countdown finished");
//   }
// }, 1000);

/**
 * setInterval is a function that repeatedly calls a function with a fixed time delay between each call
 */

// === Destructuring ===
hr("Destructuring");

const person = { name1: "May", age1: 800, role: "princess" };
const { name1, age1, role } = person; // object destructuring

console.log("Name:", name1, "Age:", age1, "Role:", role);

const fruits = ["apple", "banana", "cherry"];
const [first, , third] = fruits; // array destructuring, skipping second element
// , , means we skip the second element

console.log("First:", first, "Third:", third);

// ==== localStorage (setItem / getItem) ====
hr("localStorage");

// npm install node-localstorage

// Polyfill for localStorage in Node.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { LocalStorage } from "node-localstorage";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scratchDir = path.join(__dirname, "scratch");

if (!fs.existsSync(scratchDir)) {
  fs.mkdirSync(scratchDir);
}

const localStorage = new LocalStorage(scratchDir);

try {
  localStorage.setItem("item", JSON.stringify({ ok: true, time: Date.now() }));
  const saved = JSON.parse(localStorage.getItem("item1"));
  console.log("Saved item: ", saved);
} catch (error) {
  console.error("Error accessing localStorage:", error);
}

// === sessionStorage ===
hr("sessionStorage");

// sessionStorage is similar to localStorage but data is cleared when the page session ends
// In Node.js, you can use a similar approach with LocalStorage for testing purposes

const sessionStorage = {
  store: {},
  setItem(key, value) {
    this.store[key] = value;
  },
  getItem(key) {
    return this.store[key] || null;
  },
  removeItem(key) {
    return delete this.store[key];
  },
  clear() {
    this.store = {};
  },
  key(index) {
    return Object.keys(this.store)[index] || null;
  },
  get length() {
    return Object.keys(this.store).length;
  },
};

sessionStorage.setItem("sessionItem1", JSON.stringify({ session: true }));
sessionStorage.setItem("sessionItem2", JSON.stringify({ session: true }));
sessionStorage.setItem("sessionItem3", JSON.stringify({ session: true }));

const allData = {};
for (let i = 0; i < 3; i++) {
  const key = sessionStorage.key(i);
  console.log(key);
  allData[key] = JSON.parse(sessionStorage.getItem(key));
}

console.log("All session data:", allData);
console.log("removeItem:", sessionStorage.removeItem("sessionItem2"));
console.log("length after removal:", sessionStorage.length);

// ==== Class & Inheritance ====
hr("Classes & Inheritance");

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }

  static info() {
    console.log("Animals are living beings.");
  }
}

const dog = new Animal("Dog");
console.log(dog.name);
dog.speak();
Animal.info();

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const myDog = new Dog("Buddy");
myDog.speak(); // Buddy barks
Dog.info(); // Animals are living beings.

// ==== Array Methods ====
hr("Array Methods");

const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map((n) => n * 2);
console.log("Doubled:", doubled);

const evens = numbers1.filter((n) => n % 2 === 0);
console.log("Evens:", evens);

const sum = numbers1.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// ==== String Methods ====
hr("String Methods");

const str = "Hello, World!";
console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Includes 'World':", str.includes("World"));
console.log("Slice (0, 5):", str.slice(0, 5));
console.log("Split by ',':", str.split(", "));

// ==== JSON Methods ====
hr("JSON Methods");

const jsonString = '{"name": "May", "age": 600}';
const jsonObject = JSON.parse(jsonString);
console.log("Parsed JSON:", jsonObject); // { name: 'May', age: 600 }
const jsonStringified = JSON.stringify(jsonObject);
console.log("Stringified JSON:", jsonStringified); // {"name":"May","age":600}

// ==== Date Methods ====
hr("Date Methods");

const now = new Date();
console.log("Current Date:", now);
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // Months are 0-indexed
console.log("Date:", now.getDate());
console.log("Day of Week:", now.getDay()); // 0 = Sunday, 1 = Monday, etc.
console.log("Time:", now.toLocaleTimeString());
console.log("ISO String:", now.toISOString());

// ==== Regular Expressions ====
hr("Regular Expressions");

const regex = /hello/i;
const testString = "Hello, World!";
console.log("Regex Test:", regex.test(testString));
console.log("Match:", testString.match(regex));
console.log("Replace:", testString.replace(regex, "Hi"));
