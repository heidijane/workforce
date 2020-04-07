import { useDepartments } from "../departments/departmentProvider.js"
import { useLocations } from "../computers/locations/locationProvider.js"

export const Customer = (customer, assignedEmployees) => {
        return `
        <div>
            <h2>${customer.name}</h2>
            <p>Assigned Employees:
                <ul>
                ${assignedEmployees.map(employee => {
                    //loop through the employees and get their info
                    const departments = useDepartments()
                    const locations = useLocations()
                    
                    const employeeDepartment = departments.find(department => department.id === employee.departmentId)
                    const employeeLocation = locations.find(location => location.id === employee.locationId)

                    return `
                        <li>${employee.firstName} ${employee.lastName} - ${employeeDepartment.name}, ${employeeLocation.name} Office</li>
                    `
                }).join('')}
                </ul>
            </p>
        </div>
    `
}