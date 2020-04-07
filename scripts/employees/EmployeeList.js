import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "../computers/computerProvider.js";
import { Employee } from "./Employee.js";
import { useDepartments } from "../departments/departmentProvider.js";
import { useLocations } from "../computers/locations/locationProvider.js";

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

    //get the department data
    const departments = useDepartments()

    //get the location data
    const locations = useLocations()

    //iterate through the employees
    contentTarget.innerHTML = employees.map(employee => {
        //match the employee with their computer
        const foundComputer = computers.find(computer => computer.id === employee.computerId)

        //match the employee with their department
        const foundDepartment = departments.find(department => department.id === employee.departmentId)

        //match the employee with their location
        const foundLocation = locations.find(location => location.id === employee.locationId)

        return Employee(employee, foundComputer, foundDepartment, foundLocation)
    }).join('')
}