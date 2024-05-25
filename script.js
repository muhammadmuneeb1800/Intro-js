let Name = document.getElementById("name");
let number = document.getElementById("number");
let variable = document.getElementById("variable");
let camel = document.getElementById("camel");
let sum = document.getElementById("sum");
let sub = document.getElementById("sub");
let multi = document.getElementById("multi");
let divide = document.getElementById("divide");
let calculate = document.getElementById("calculate");

let input = document.getElementById("input");
let output = document.getElementById("output");

let inp = document.getElementById("btnInput");
let out = document.getElementById("btnOutput");

Name.onclick = function () {
  alert("Muhammad Muneeb");
  input.value = "alert('Muhammad Muneeb')";
};

number.onclick = function () {
  alert("20");
  input.value = "let a = 10; let b = 10; let sum = 20;";
  output.value = "20";
};

variable.onclick = function () {
  output.value = "Rules Of Variables ";
};

sum.onclick = function () {
  alert("20");
  input.value = "let a = 10; let b = 10; let sum = a + b;";
  output.value = "20";
};

sub.onclick = function () {
  alert("0");
  input.value = "let a = 10; let b = 10; let sub = a - b;";
  output.value = "0";
};

multi.onclick = function () {
  alert("100");
  input.value = "let a = 10; let b = 10; let multi = a * b;";
  output.value = "100";
};

divide.onclick = function () {
  alert("1");
  input.value = "let a = 10; let b = 10; let divide = 1;";
  output.value = "1";
};

calculate.onclick = function () {
  alert("26");
  input.value = "let some Calculate = 36 / 6 * 3 + 2 ** 4 - (3 + 5)";
  output.value = "26";
};

camel.onclick = function () {
  output.value = "Rules Of CamelCase ";
};

inp.onclick = function () {
  input.value = "";
};

out.onclick = function () {
  output.value = "";
};
