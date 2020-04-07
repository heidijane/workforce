export const Employee = (employee, computer, department, location) => {
    return `
    <div>
        <h2>${employee.firstName} ${employee.lastName}</h2>
        <p>Age: ${employee.age}</p>
        <p>Computer Model: ${computer.compModel}</p>
        <p>Computer Manufacture Year: ${computer.compManYear}</p>
        <p>Department: ${department.name}</p>
        <p>Location: ${location.name} Office</p>
    </div>
    `
}