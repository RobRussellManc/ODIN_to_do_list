import { GenerateTaskTable } from "./TaskTable.js"

import { DomListeners } from "./ButtonListeners.js";



export const DOMUpdate = (function() {

    // DOM Selectors
    const ProjectListDOM = document.querySelector('list_projects');
    const TasksDOM = document.querySelector('task_main_box');

    // Make tasktable funtion scoped variable
    let taskTable;

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

    // Variables to handle task table pages
    const rowsPerPage = 10;
    let currentPage = 1;

    const prevButton = document.querySelector("#prev-page");
    const nextButton = document.querySelector("#next-page");

    // Function to change table rows to display = None if they don't fit
    function renderTaskTable() {
        
        const allRows = Array.from(taskTable.children).slice(1)

        const totalPages = Math.ceil(allRows.length / rowsPerPage);

        allRows.forEach((row, index) => {
            row.style.display = 
                index >= (currentPage -1) * rowsPerPage && index < currentPage * rowsPerPage
                ? "table-row"
                : "none";
        })
        
        // Enable/disable navigation Complete design tasks"buttons
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages || totalPages === 0;

        console.log(`total pages: ${totalPages}`)
        console.log(currentPage)
    };

    // Next/prev page button click handlers
    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            renderTaskTable()
        }
    })

    nextButton.addEventListener("click", function () {
        const totalPages = Math.ceil(taskTable.children.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTaskTable();
        }
    })

    
    

    const updateTaskTable = (project) => {
        taskTable = GenerateTaskTable(project)
        TasksDOM.innerHTML = '';
        TasksDOM.appendChild(taskTable);
        displayProjectName(project.title);
        renderTaskTable()
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

