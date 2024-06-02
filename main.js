import inquirer from 'inquirer';
let collectionOfEmployee = [];
async function startEmployeeManagmentSystem() {
    console.log("******* WELCOME TO EMPLOYEE MANAGMENT SYSTEM*******");
    console.log("\n");
    let selectedOption = await inquirer.prompt([{
            message: "Please select an option from given list below",
            type: "list",
            name: "userSelectedOption",
            choices: [
                "Add Employee",
                "View Employee",
                "Delete Employee",
                "update Employee",
                "Exit"
            ]
        }]);
    console.log(selectedOption.userSelectedOption);
    switch (selectedOption.userSelectedOption) {
        case "Add Employee":
            addEmployee();
            break;
        case "View Employee":
            viewEmployee();
            break;
        case "Delete Employee":
            deleteEmployee();
            break;
        case "update Employee":
            updateEmployee();
            break;
        default:
            break;
    }
}
async function addEmployee() {
    console.log("\n");
    let employeeDetail = await inquirer.prompt([
        {
            name: "employeeName",
            message: "Enter employee name :",
            type: "input"
        },
        {
            name: "employeeId",
            message: "Enter employee Id :",
            type: "number"
        },
        {
            name: "employeeSalary",
            message: "Enter employee salary :",
            type: "number"
        }
    ]);
    collectionOfEmployee.push({
        EmployeeId: employeeDetail.employeeId,
        EmployeeName: employeeDetail.employeeName,
        Salary: employeeDetail.employeeSalary
    });
    console.log("\n ********** employee added successfully ********** \n");
    console.log(collectionOfEmployee[collectionOfEmployee.length - 1]);
    console.log("\n");
    startEmployeeManagmentSystem();
}
function viewEmployee() {
    console.log("\n ****** View all Employees ****** \n");
    for (let i = 0; i < collectionOfEmployee.length; i++) {
        console.log(collectionOfEmployee[i]);
    }
    startEmployeeManagmentSystem();
}
async function deleteEmployee() {
    let employeeDetail = await inquirer.prompt([
        {
            name: "employeeId",
            message: "Enter employee Id to delete : ",
            type: "number"
        }
    ]);
    let filterByEmployeeId = collectionOfEmployee.filter((x) => x.EmployeeId != employeeDetail.employeeId);
    collectionOfEmployee = filterByEmployeeId;
    console.log("\n Employee deleted successfully");
    startEmployeeManagmentSystem();
}
async function updateEmployee() {
    let employeeDetail = await inquirer.prompt([
        {
            name: "employeeId",
            message: "enter employee Id to update salary :",
            type: "number"
        },
        {
            name: "newSalary",
            message: "enter updated salary :",
            type: "number"
        }
    ]);
    for (let employee of collectionOfEmployee) {
        if (employee.EmployeeId === employeeDetail.employeeId) {
            employee.Salary = employeeDetail.newSalary;
            console.log("\n ********** Employee salary updated successfully ********** \n");
            console.log(employee);
            return;
        }
    }
    startEmployeeManagmentSystem();
}
startEmployeeManagmentSystem();
