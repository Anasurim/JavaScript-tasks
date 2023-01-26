const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const labelToFind = colorPickerOptions.find(
  (option) => option.label === "green"
);

console.log(labelToFind);

console.log(
  colorPickerOptions.findIndex((option) => option.color === "#E91E63")
);

console.log("===========every & some===========");

const someArray = [2, 3, 4, 5, 6, -1];
console.log(someArray.every((element) => element > 0));

console.log(someArray.some((element) => element > 0));
