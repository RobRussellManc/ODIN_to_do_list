import { TaskTable } from "./TaskTable.js"

export const DOMUpdate = (function() {

    // DOM Selectors
    const ProjectListDOM = document.querySelector('projects');
    const TasksDOM = document.querySelector('tasks');

    const listProjects = (user) => {
        let ulNode = document.createElement('ul');

        for (let key in user.projects) {
            let project = user.projects[key];
            let liNode = document.createElement('li');
            liNode.textContent = project.title
            liNode.addEventListener("click", () => updateTaskTable(project))
            ulNode.appendChild(liNode); 
        };
        ProjectListDOM.appendChild(ulNode);
    }

    const updateTaskTable = (project) => {
        let table= TaskTable(project)
        TasksDOM.innerHTML = '';
        TasksDOM.appendChild(table);
    }

    return {listProjects, updateTaskTable}

})();

