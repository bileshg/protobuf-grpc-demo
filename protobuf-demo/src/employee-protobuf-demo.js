const root = require("./proto/compiled");
const fs = require("fs")

const atul = new root.Employee.create({
    name: "Atul",
    salary: 10000,
    id: 1001
})

const soumil = new root.Employee.create({
    name: "Soumil",
    salary: 20000,
    id: 1002
})

const rick = new root.Employee.create({
    name: "Rick",
    salary: 15000,
    id: 1003
})

const employees = new root.Employees.create({
    employees: [atul, soumil, rick]
})

const buffer = root.Employees.encode(employees).finish()
fs.writeFileSync(".\\tmp\\employeesbinary", buffer)

const extractedEmployees = root.Employees.decode(fs.readFileSync(".\\tmp\\employeesbinary"))
console.log(extractedEmployees)
