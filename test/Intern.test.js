const Employee = require("../lib/Intern");

describe("Intern", () => {

    test("sets intern's school", () => {
        const school = "Fancy School";
        const e = new Employee("john", "100", "test@gmail.com", "school");
        expect(e.school).toBe(school);
    })
    test("check proper role is returned", () => {
        const role = "Intern";
        const e = new Employee("john", "100", "test@gmail.com", "role");
        expect(e.getRole()).toBe(role);
})
})