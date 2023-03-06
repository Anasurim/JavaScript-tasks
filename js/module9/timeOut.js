const greet = () => {
  console.log("Hello!");
};

const timerId = setTimeout(greet, 3000);

clearTimeout(timerId);
