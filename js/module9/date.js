const date = new Date();

console.log(date);
console.log(typeof date);

console.log(date.toString());
console.log(typeof date.toString());

const date1 = new Date();
console.log("Date: ", date1);

// Повертає день місяця від 1 до 31
console.log("getUTCDate(): ", date1.getUTCDate());

// Повертає день тижня від 0 до 6
console.log("getUTCDay(): ", date1.getUTCDay());

// Повертає місяць від 0 до 11
console.log("getUTCMonth(): ", date1.getUTCMonth());

// Повертає рік з 4 цифр
console.log("getUTCFullYear(): ", date1.getUTCFullYear());

// Повертає години
console.log("getUTCHours(): ", date1.getUTCHours());

// Повертає хвилини
console.log("getUTCMinutes(): ", date1.getUTCMinutes());

// Повертає секунди
console.log("getUTCSeconds(): ", date1.getUTCSeconds());

// Повертає мілісекунди
console.log("getUTCMilliseconds(): ", date1.getUTCMilliseconds());
