import {Task} from "./tasks.js"


class Project {
    constructor(title) {
        this.title = title;
        this.projectTasks = {};
    }

    storeTasks(task, id) {
        this.projectTasks[id] = task
        
    }

    toString() {
        return `Project: ${this.title}`;
    }
}

export {Project}