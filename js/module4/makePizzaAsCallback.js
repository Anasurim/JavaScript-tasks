// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Margarita", makePizza));
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`
      );
    }
    return onSuccess(pizzaName);
  },
};

function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks

// pizzaPalace.order("Smoked", makePizza, onOrderError);
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));

console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));

console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));

console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
