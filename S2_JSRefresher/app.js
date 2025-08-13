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

const age = 18;
const canVote = age >= 18 ? "Yes, can vote." : "No, cannot vote.";
console.log(canVote);
