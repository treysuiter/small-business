export default {

    //Fetches employee object expanded wit assigned computer and department

    getEmployeesInfo() {
        return fetch("http://127.0.0.1:8088/employees?_expand=computer&_expand=department")
            .then(response => response.json())
    }
}