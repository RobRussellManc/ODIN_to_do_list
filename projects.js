import {Task} from "./tasks.js"


class Project {
    constructor(title) {
        this.title = title;
        this.projectTasks = {};
        this.taskIdCounter = 0;
    }

    toString() {
        return `Project: ${this.title}`;
    }

    createTask(taskInfo) {
        const new_task = new Task(taskInfo)
        this.projectTasks[this.taskIdCounter] = new_task;
        this.taskIdCounter++;
    }
}

export {Project}