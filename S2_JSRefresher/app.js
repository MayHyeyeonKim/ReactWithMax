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
