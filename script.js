const currentYear = 2023;
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];
const colors = ["#2d6b5f", "#72e3a6", "#dff4c7", "#edbf98", "#ea3d36"];
const defaultColor = "#888";
let activeColor = "";
const calendar = document.getElementById("calendar");
const moods = document.querySelectorAll(".mood");
const randomize = document.querySelector("#randomize");
const clear = document.querySelector("#clear");
