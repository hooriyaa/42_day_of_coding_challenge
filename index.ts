// QUESTION 124:
let user = {
  name: "Hooriya",
  age: 16,

  userProperty: function () {
    return `Name:${this.name}, Age:${this.age}`;
  },
};
let result = user.userProperty();
console.log(result);

// QUESTION 125:
let empolyeeDetail = {
  name: "Mahnoor",
  age: 17,
  email: "abcgmail.com",
  empolyeeProperties: function () {
    return `Name:${this.name}, Age:${this.age}, Email:${this.email}`;
  },
};
let result1 = empolyeeDetail.empolyeeProperties();
console.log(result1);

// QUESTION 125:
let objectMethod = {
  subject: "Math",

  outerMethod: function () {
    console.log(this.subject);
    let innerMethod = () => {
      console.log(this.subject);
    };
    innerMethod();
  },
};
objectMethod.outerMethod();
