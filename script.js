"use-strict";
let result = new Date().toISOString().split("T")[0];
document.querySelector("h1").textContent = result;
