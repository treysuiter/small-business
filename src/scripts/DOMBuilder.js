import api from "./api.js";

export default {

    allEmployeesToDOM() {

        const employeeCardsContainer = document.querySelector("#display-container")

        let employeeCardsHTML = ""

        api.getEmployees()

            .then(response => {

                for (let singleEmployee of response) {

                    let newEmployeeObject = {
                        "name": "",
                        "department": "",
                        "computer": ""
                    }

                    newEmployeeObject["name"] = singleEmployee.empName
                    console.log(newEmployeeObject)



                }
            }).then(api.getDepartment(singleEmployee.id))
            .then(response => console.log(response))
    }
}