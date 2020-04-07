import { useCustomers } from "./customerProvider.js"
import { useEmployees } from "../employees/employeeProvider.js"
import { useEmployeeCustomers } from "../employees/employeeCustomerProvider.js"
import { Customer } from "./Customer.js"

const contentTarget = document.querySelector("#customers")

//initial render function
export const ShowCustomerList = () => {
    render()
}

const render = () => {
    const customers = useCustomers()
    const employees = useEmployees()
    const employeeCustomers = useEmployeeCustomers()

    contentTarget.innerHTML = customers.map(customer => {

        const relationships = employeeCustomers.filter(relationship => relationship.customerId === customer.id)

        const assignedEmployees = relationships.map(relationship => {
            return employees.find(employee => employee.id === relationship.employeeId)
        })

        return Customer(customer, assignedEmployees)

    }).join('')

}