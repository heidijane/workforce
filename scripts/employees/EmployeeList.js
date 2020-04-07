import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "../computers/computerProvider.js";
import { Employee } from "./Employee.js";
import { useDepartments } from "../departments/departmentProvider.js";
import { useLocations } from "../computers/locations/locationProvider.js";
import { useCustomers } from "../customers/customerProvider.js";
import { useEmployeeCustomers } from "./employeeCustomerProvider.js";

const contentTarget = document.querySelector("#employees")

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

    //get the customer data
    const customers = useCustomers()

    //get the relationships between the customers and the employees
    const employeeCustomers = useEmployeeCustomers()

    //iterate through the employees
    contentTarget.innerHTML = employees.map(employee => {
        //match the employee with their computer
        const foundComputer = computers.find(computer => computer.id === employee.computerId)

        //match the employee with their department
        const foundDepartment = departments.find(department => department.id === employee.departmentId)

        //match the employee with their location
        const foundLocation = locations.find(location => location.id === employee.locationId)

        //find the employee/customer relationships
        const relationships = employeeCustomers.filter(relationship => relationship.employeeId === employee.id)

        //convert the relationship info into customer data
        const assignedCustomers = relationships.map(relationship => {
            return customers.find(customer => customer.id === relationship.customerId)
        })

        return Employee(employee, foundComputer, foundDepartment, foundLocation, assignedCustomers)
    }).join('')
}