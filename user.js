import {Project} from "./projects.js"
import {Task} from "./tasks.js"

class User {
    constructor(name) {
        this.name = name;
        this.projects = {};
        this.projectIdCounter = 0;
        this.taskIdCounter = 0;
    }

    createTask(taskInfo, projectIndex) {
        const new_task = new Task(taskInfo)
        this.projects[projectIndex].storeTasks(new_task, this.taskIdCounter);
        this.taskIdCounter++;
    }

    createProject(title) {
        const project = new Project(title);
        this.projects[this.projectIdCounter] = project;
        this.projectIdCounter++;
    }
}

export {User}