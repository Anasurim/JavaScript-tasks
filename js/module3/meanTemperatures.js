const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, today, tomorrow } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);
