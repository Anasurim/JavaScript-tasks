const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

const getFriends = (users) =>
  users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);

// console.log(getFriends(users));

const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true);
};

// console.log(getActiveUsers(users));

const calculateTotalBalance = (users) =>
  users.reduce((totalBalance, { balance }) => {
    totalBalance += balance;
    return totalBalance;
  }, 0);

// console.log(calculateTotalBalance(users));

const getAllFriends = (users) =>
  users
    .reduce((allFriends, friend) => {
      allFriends.push(...friend.friends);

      return allFriends;
    }, [])
    .reduce((acc) => acc + 1, 0);

console.log(getAllFriends(users));

// const getTotalFriendCount = (users) =>
//   getAllFriends(users).reduce((acc) => {
//     return acc + 1;
//   }, 0);

// console.log(getTotalFriendCount(users));

// const getTotalFriendCount = getAllFriends(users).length;

// console.log(getTotalFriendCount);

const sortByDescendingFriendCount = (users) =>
  [...users].sort((a, b) => a.friends.length - b.friends.length);

console.table(sortByDescendingFriendCount(users));
