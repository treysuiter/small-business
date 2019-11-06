import api from "./api.js";
import HTMLBuilder from "./employeeHTMLCardBuilder"



export default {

    /*Sets reference to DOM container, fetches all employee names as well as respective department 
    and assigned computer as object, send object to HTML builder, then adds to DOM.*/

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