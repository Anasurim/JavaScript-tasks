const colors = [
  {
    hex: "#f44336",
    rgb: "244,67,54",
  },
  {
    hex: "#2196f3",
    rgb: "33,150,243",
  },
  {
    hex: "#4caf50",
    rgb: "76,175,80",
  },
  {
    hex: "#ffeb3b",
    rgb: "255,235,59",
  },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  //   console.log(color.hex);
  //   console.log(color.rgb);

  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors);
console.log(rgbColors);
