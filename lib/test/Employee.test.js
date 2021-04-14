const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");


test("Is Employee an Object?",() =>{
    const e = new Employee()
    expect(typeof(e)).toBe("object")
})