export const Employee = (employee, computer) => {
    return `
    <div>
        <h2>${employee.firstName} ${employee.lastName}</h2>
        <p>Age: ${employee.age}</p>
        <p>Computer Model: ${computer.compModel}</p>
        <p>Computer Manufacture Year: ${computer.compManYear}</p>
    </div>
    `
}