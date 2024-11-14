import {Project} from "./projects.js"
import {Task} from "./tasks.js"

class User {
    constructor(name) {
        this.name = name;
        this.projects = {};
        this.projectIdCounter = 0;
    }

    

    createProject(title) {
        const project = new Project(title);
        this.projects[this.projectIdCounter] = project;
        this.projectIdCounter++;
    }
}

export {User}