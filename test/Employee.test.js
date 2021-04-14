const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");


test("Is Employee an Object?",() =>{
    const e = new Employee()
    expect(typeof(e)).toBe("object")
});

test("set name using constructor",() =>{
    const name = 'john'
    const e = new Employee(name)
    expect(e.name).toBe(name)
});

test("set id using constructor",() =>{
    const id = 100
    const e = new Employee('john', id)
    expect(e.id).toBe(id)
});


