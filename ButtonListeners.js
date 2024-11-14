import { DOMUpdate } from "./DOMController.js"

const task_array_maker = (tasktitle, taskdesc, taskpriority ) => {
    const array = {
        title: `${tasktitle}`,
        description: `${taskdesc}`,
        priority: `${taskpriority}`,
        completed: true
    }
    return array;
}


 // Add project + button
export const DomListeners = (function() {
     
    const AddProjectButton = (user) => {
        const addProjectButton = document.querySelector('#project_submit');
        const form = document.querySelector('.newProject');
        
        // Logic for when new project form is submitted
        const addProjectHandler = () => {
            const projectname = form.elements['newProject'].value;
            //console.log(projectname);
            user.createProject(projectname);
            DOMUpdate.listProjects(user);
            form.reset();
        }

        // Handle when enter key is pressed
        form.addEventListener("keydown", function(event) {
            // Check if the pressed key is "Enter"
            if (event.key === "Enter") {
                event.preventDefault(); 
                addProjectHandler();    
        }});

        // Handle when submit button is pressed
        addProjectButton.addEventListener("click", () => {
            addProjectHandler();
        })
    }

    const AddTaskButton = (project) => {
        const addTaskButton = document.querySelector('#task_submit');
        const form = document.querySelector('.addTask');
    
        // Define the button_handler function
        const button_handler = () => {
            const tasktitle = form.elements['taskTitle'].value;
            const taskdesc = form.elements['taskDesc'].value;
            const taskpriority = form.elements['taskPriority'].value;
    
            const new_task = task_array_maker(tasktitle, taskdesc, taskpriority);
            project.createTask(new_task);
            DOMUpdate.updateTaskTable(project);
            console.log(project.projectTasks);
        };
    
        // Remove the existing event listener if it was added in a previous call
        if (addTaskButton._buttonHandler) {
            addTaskButton.removeEventListener("click", addTaskButton._buttonHandler);
        }
    
        // Attach the new handler and store it as a property of addTaskButton
        addTaskButton.addEventListener("click", button_handler);
        addTaskButton._buttonHandler = button_handler; // Store reference
    };

    

    return {AddProjectButton,  AddTaskButton }
})();
