/*
Exercise 2: Filter users who are admins and verified

You are going to filter users that are admins ('isAdmin')
and who are verified ('isVerified')

An array of users ('users') has been provided for you.

A variable 'filteredUsers' has been provided for you. You should
set your .filter results to this variable.

*/

const users = [
  {
    firstName: "Ola",
    lastName: "Nordmann",
    isAdmin: true,
    isVerified: false,
  },
  {
    firstName: "Kari",
    lastName: "Nordmann",
    isAdmin: true,
    isVerified: true,
  },
  {
    firstName: "Jan",
    lastName: "Nordmann",
    isAdmin: true,
    isVerified: true,
  },
  {
    firstName: "Nora",
    lastName: "Nordmann",
    isAdmin: false,
    isVerified: false,
  },
];

const filteredUsers = users.filter(
  (value) => value.isAdmin === true || value.isVerified === true
);

console.log(filteredUsers);

const card = [
  {
    id: 01,
    work: "cleaner",
    name: "john",
  },
  {
    id: 02,
    work: "designer",
    name: "olav",
  },
  {
    id: 03,
    work: "guard",
    name: "rita",
  },
];

const cardArray = card.map((value) => `I am ${value.name}`);
console.log(cardArray);

// const newArray = cardArray.filter((person) => {
//   if (person.work === "designer") {
//     return true;
//   }
// });

// console.log(newArray);
