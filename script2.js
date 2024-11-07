// Project object
function ProjectObject (name_) {
    const name = name_;
    const date = '04/12/2024'
    const tasks = [];

    const addTask = (task_info) => {
        tasks.push(Task(task_info))
    }

    const listProjectTasks = () => {
        tasks.forEach(element => {
                console.log(element.PrintTask());
        });
    }

    return {name, date, tasks, addTask, listProjectTasks}
}

// Storing projects
const ProjectStore =  (function() {
    const projects = [];
    return {projects}
})();

// Create projects
function CreateProject(projectName) {
    ProjectActions.addProject(projectName);
}

// Project actions
const ProjectActions= (function () {

    const addProject = (projectName) => { 
        ProjectStore.projects.push(ProjectObject(projectName))
    }

    const deleteProject = (projectNumber) => {
        ProjectStore.projects.splice(projectNumber, 1)
        console.log(`Deleted project ${projects[projectNumber].name}`)
    }

    const listProjects = () => {
        ProjectStore.projects.forEach(element => {
            console.log(`${element.name}, created on ${element.date}`)
        });
    }

    return {addProject, deleteProject, listProjects}
})();


// Task objects
function Task(task_info) {
    let title = TaskObject(task_info[0]);
    let description = TaskObject(task_info[1]);
    let priority = TaskObject(task_info[2]);
    let completed = false;

    const ToggleComplete = () => { 
        completed = !completed;
    }

    const PrintTask = () => {
        return `${title.getItem()}, ${description.getItem()}, ${priority.getItem()}, ${completed}`;
    }
     
    return {PrintTask, ToggleComplete}
}

// Individual task item objects
function TaskObject(item_) {
    let item = item_;

    const getItem = () => {
        return item;
    }

    const updateItem = (newTitle) => {
        item = newTitle;
    }

    const capataliseItem = () => {
        item = item.toUpperCase();
    }

    return {getItem, updateItem, capataliseItem}
}


CreateProject('MyProject')
CreateProject('2nd Project')
CreateProject('3rd Project')



ProjectActions.listProjects();

ProjectStore.projects[0].addTask(['Tasks title1', 'A task desc1', 'priority1'])
ProjectStore.projects[0].addTask(['Tasks title2', 'A task desc2', 'priority2'])
ProjectStore.projects[0].addTask(['Tasks title3', 'A task desc3', 'priority3'])
console.log(ProjectStore.projects[0].tasks[0].PrintTask())



ProjectStore.projects[0].listProjectTasks();
ProjectStore.projects[0].tasks[0].ToggleComplete()
ProjectStore.projects[0].listProjectTasks();


/*




console.log(Projects.projects[0].tasks)

Projects.projects[0].addTask(['Tasks title1', 'A task desc1', 'priority1'])
Projects.projects[0].addTask(['Tasks title2', 'A task desc2', 'priority2'])
Projects.projects[0].addTask(['Tasks title3', 'A task desc3', 'priority3'])


console.log(Projects.projects[0].tasks[0].PrintTask())
Projects.projects[0].tasks[0].ToggleComplete()
console.log(Projects.projects[0].tasks[0].PrintTask())




Projects.deleteProject[1];

Projects.listProjects();

//console.log(Projects.projects[0].tasks[0].title.getItem())
//console.log(Projects.projects[0].tasks[1].title.getItem())

*/

