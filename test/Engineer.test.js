const Employee = require("../lib/Engineer");

describe("Engineer", () => {

    test("sets Engineers GitHub", () => {
        const gitHub = "rrogers422";
        const e = new Employee("john", "100", "test@gmail.com", "gitHub");
        expect(e.gitHub).toBe(gitHub);
    })
    test("check proper role is returned", () => {
        const role = "Engineer";
        const e = new Employee("x", "y", "z", "a");
        expect(e.getRole()).toBe(role);
})
})