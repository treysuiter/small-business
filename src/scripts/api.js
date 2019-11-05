export default {
    getEmployees() {
        return fetch("http://127.0.0.1:8088/employees")
            .then(response => response.json())
    },
    getDepartment(deptID) {
        return fetch(`http://127.0.0.1:8088/departments/${deptID}`)
            .then(response => response.json())
    },
    getComputer(compID) {
        return fetch(`http://127.0.0.1:8088/computers/${compID}`)
            .then(response => response.json())
    }
}