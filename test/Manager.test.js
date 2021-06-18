const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const { TestScheduler } = require('@jest/core');

describe("Manager", () => {

test("Set office number", () => {
  const phone = "1234567890";
  const e = new Employee("John", "100", "test@gmail.com", "phone");
  expect(e.phone).toBe(phone);
});

// test("Check that proper role is returned", () => {
//   const role = "Manager";
//   const e = new Employee("x", "y", "z", "a");
//   expect(e.role).toBe(role);
// });

test("getRole() should return \"Manager\"", () => {
  const role = "Manager";
  const e = new Employee("x", "y", "z", "a");
  expect(e.getRole()).toBe(role);
});

// test("Can get office number via getOffice()", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.getOfficeNumber()).toBe(testValue);
});
