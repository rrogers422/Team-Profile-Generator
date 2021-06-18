const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {

test("Employee has a object?",() =>{
    const e = new Employee()
    expect(typeof(e)).toBe("object")
});

test("set name using constructor",() =>{
    const name = 'john'
    const e = new Employee(name)
    expect(e.name).toBe(name)
});

test("set id using constructor",() =>{
    const id = "100";
    const e = new Employee('john', "100")
    expect(e.id).toBe(id)
});

test("sets an employee email",() =>{
    const email = "test@gmail.com";
    const e = new Employee('john', "100", "test@gmail.com")
    expect(e.email).toBe(email)
});

test("Check that proper role is returned",() =>{
    const role = "Employee";
    const e = new Employee('x', "y", "z")
    expect(e.role).toBe(role)
});
}
)

