import {Task, TaskObject} from "./tasks.js"


// Project object
function ProjectObject (name_) {
    const name = name_;
    const date = '04/12/2024'
    const tasks = [];

    const addTask = (task_info) => {
        tasks.push(Task(task_info))
    }

    const getTaskX = (taskNum) => {
        return tasks[taskNum];
    }

    const listProjectTasks = () => {
        tasks.forEach(element => {
                console.log(element.PrintTask());
        });
    }

    return {name, date, tasks, addTask, getTaskX, listProjectTasks}
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

    const getProjectX = (x) => {
        return ProjectStore.projects[x];
    }

    const getProjects = () => {
        return ProjectStore.projects;
    }

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

    return {getProjectX, getProjects, addProject, deleteProject, listProjects}
})();

export {ProjectStore, CreateProject, ProjectActions}