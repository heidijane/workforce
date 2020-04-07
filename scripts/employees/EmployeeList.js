import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "../computers/computerProvider.js";
import { Employee } from "./Employee.js";

const contentTarget = document.querySelector("#container")

//initial render function
export const ShowEmployeeList = () => {
    render()
}

//render the employee list
const render = () => {
    //get the employee data
    const employees = useEmployees()

    //get the computer data
    const computers = useComputers()

    //iterate through the employees
    contentTarget.innerHTML = employees.map(employee => {
        //match the employee with their computer
        const foundComputer = computers.find(computer => computer.id === employee.computerId)
        return Employee(employee, foundComputer)
    }).join('')
}