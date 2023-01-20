const rgb = [200, 255, 100];
const [red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`);

const [red1, ...colors] = rgb;

console.log(red1); // "200"
console.log(colors);

// =====

const [, , blue1] = rgb;

console.log(`Blue: ${blue1}`);
