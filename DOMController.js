import { TaskTable } from "./TaskTable.js"

import { DomListeners } from "./ButtonListeners.js";



export const DOMUpdate = (function() {

    // DOM Selectors
    const ProjectListDOM = document.querySelector('list_projects');
    const TasksDOM = document.querySelector('tasks');

    

    const listProjects = (user) => {
        // Reset contents
        ProjectListDOM.innerHTML = '';

        let ulNode = document.createElement('ul');

        for (let key in user.projects) {
            let project = user.projects[key];
            let liNode = document.createElement('li');
            liNode.textContent = project.title
            liNode.addEventListener("click", () => {
                updateTaskTable(project);
                activateNewTaskButton(project);
            })
            ulNode.appendChild(liNode); 
        };
        ProjectListDOM.appendChild(ulNode);
    }

    const updateTaskTable = (project) => {
        let table= TaskTable(project)
        TasksDOM.innerHTML = '';
        TasksDOM.appendChild(table);
        displayProjectName(project.title);
    }

    const activateNewTaskButton = (project) => {
        DomListeners.AddTaskButton(project);
    }

    const displayusername = (username) => {
        const display_username = document.querySelector('.display_username');
        display_username.innerHTML = username;
    }
    
    const displayProjectName = (projectname) => {
        const projectdisplayname = document.querySelector('.display_project');
        projectdisplayname.innerHTML = projectname;
    }

   


    return {listProjects, updateTaskTable, displayusername}

})();

