export default {
    buildHTML: (employee) => {
        console.log("html builder object", employee)
        return `
        <div class="employeeCard">
        <h3>Name: ${employee.empName}</h3>
        <p>Title: ${employee.department.departmentName}</p>
        <p>Computer: ${employee.computer.model}</p>
        </div>
        `
    }
}
