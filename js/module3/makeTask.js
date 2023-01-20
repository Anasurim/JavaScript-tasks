function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

  const outputData = { category, priority, completed, ...data };

  return outputData;
}

console.log(makeTask({ category: "Finance", text: "Take interest" }));

// =====

function foo(a, b, c, ...args) {
  console.log(args);
}

foo(1, 2, 3, 5, 6);
