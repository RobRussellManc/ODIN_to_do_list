export const DOMUpdate = (function() {

    // DOM Selectors

    const ProjectListDOM = document.querySelector('projects');
    const TasksDOM = document.querySelector('tasks');

    const listProjects = (projectList) => {
        //console.log(projectList);

        let ulNode = document.createElement('ul');

        projectList.forEach(element => {
            let liNode = document.createElement('li');
            liNode.textContent = element.name;
            liNode.addEventListener("click", () => displayTasks(element))
            ulNode.appendChild(liNode);            
        });

        ProjectListDOM.appendChild(ulNode);
    }

    const displayTasks = (project) => {
        TasksDOM.innerHTML = '';
        console.log(project.tasks)
        let ulNode = document.createElement('ul');

        project.tasks.forEach(element => {
            let liNode = document.createElement('li');
            liNode.textContent = element.PrintTask();
            ulNode.appendChild(liNode); 
        });

        TasksDOM.appendChild(ulNode);
    }


    return {listProjects, displayTasks}

})();
