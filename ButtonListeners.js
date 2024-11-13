import { DOMUpdate } from "./DOMController.js"


 // Add project + button
export class DomListeners {
    constructor(user) {
        
    }
     
    AddProjectButton(user) {
        const addButton = document.querySelector('#submit');
        const form = document.querySelector('.newProject');

        addButton.addEventListener("click", () => {
            const projectname = form.elements['newProject'].value
            console.log(projectname)
            user.createProject(projectname)
            DOMUpdate.listProjects(user)
            form.reset();
        })
    }
}
