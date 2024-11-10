//import { DOMUpdate } from "./DOMController.js";

class Task {
    #task

    constructor(args) {
        this.#task = taskify(args);
    }

    get task() {
        return this.#task;
    }

    toggleComplete() {
        this.#task.completed = !this.#task.completed;
    }

    toString() {
        return `Title: ${this.#task.title}, Description: ${this.#task.description}, Priority: ${this.#task.priority}, Completed: ${this.#task.completed}`;
    }
}

function taskify(args) {
    let title = args.title;
    let description = args.description;
    let priority = args.priority;
    let completed = 'completed' in args ? args.completed : false;
    return {title, description, priority, completed}
};

export {Task}