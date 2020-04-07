export const Employee = (employee, computer, department, location, assignedCustomers) => {
        return `
    <div>
        <h2>${employee.firstName} ${employee.lastName}</h2>
        <p>Age: ${employee.age}</p>
        <p>Computer Model: ${computer.compModel}</p>
        <p>Computer Manufacture Year: ${computer.compManYear}</p>
        <p>Department: ${department.name}</p>
        <p>Location: ${location.name} Office</p>
        <p>
            Assigned Customers:
            <ul>
                ${assignedCustomers.map(customer => {
                    return `<li>${customer.name}</li>`
                }).join("")}
            </ul>
        </p>
    </div>
    `
}