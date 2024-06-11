const fs = require("fs");

const employees = []

const atul = {
    "name": "Atul",
    "salary": 10000,
    "id": 1001
}

const soumil = {
    "name": "Soumil",
    "salary": 20000,
    "id": 1002
}

const rick = {
    "name": "Rick",
    "salary": 15000,
    "id": 1003
}

employees.push(atul)
employees.push(soumil)
employees.push(rick)

fs.writeFileSync(".\\tmp\\jsondata.json", JSON.stringify(employees));