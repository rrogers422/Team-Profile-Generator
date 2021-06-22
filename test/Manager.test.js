const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const { TestScheduler } = require('@jest/core');

describe("Manager", () => {

test("Set office number", () => {
  const phone = "1234567890";
  const e = new Employee("John", "100", "test@gmail.com", "1234567890");
  expect(e.phone).toBe(phone);
});

// test("Check that proper role is returned", () => {
//   const role = "Manager";
//   const e = new Employee("x", "y", "z", "a");
//   expect(e.role).toBe(role);
// });

test("getRole() should return \"Manager\"", () => {
  const role = "Manager";
  const e = new Employee("x", "y", "z", "ac");
  expect(e.getRole()).toBe(role);
});

});
