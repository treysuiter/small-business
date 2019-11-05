import api from "./api.js";
import HTMLBuilder from "./employeeHTMLCardBuilder"

export default {

    allEmployeesToDOM() {

        const employeeCardsContainer = document.querySelector("#display-container")

        let employeeCardsHTML = ""

        api.getEmployeesInfo()
            .then(response => {
                for (let employeeObject of response) {

                    employeeCardsHTML += HTMLBuilder.buildHTML(employeeObject)
                }
                employeeCardsContainer.innerHTML = employeeCardsHTML
            })
    }
}