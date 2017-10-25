// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    name: "yani",
    phoneNumber: "8770021",
    email: "yani@email.com",
    uniqueID: "yani1234"
    
  },
  {
    name: "lili",
    phoneNumber: "206345123",
    email: "lili@email.com",
    uniqueID: "lili5678"
  },
  {
    name: "suzan",
    phoneNumber: "123456789",
    email: "suzan@email.com",
    uniqueID: "suzan9123"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
