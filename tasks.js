import { DOMUpdate } from "./DOMController.js";


class Task {
    #task

    constructor(data) {
        this.#task = taskify(data);
    }

    get task() {
        return this.#task;
    }

    toggleComplete() {
        this.#task.completed = !this.#task.completed;
    }
    
}

function taskify(data) {
    let title = data[0];
    let description = data[1];
    let priority = data[2];
    let completed = false;
    return {title, description, priority, completed}
};



// Toggle task complete
function ToggleComplete(task, project) {
    task.task_data[3] = !task.task_data[3];
    DOMUpdate.updateTaskTable(project)

}

let x = new Task(["Finish project", "Complete all pending items", "High"]);
console.log(x);


// Task objects
function Task(task_info) {
    /*
    let title = TaskObject(task_info[0]);
    let description = TaskObject(task_info[1]);
    let priority = TaskObject(task_info[2]);
    let completed = false;

    */
    let title = task_info[0];
    let description = task_info[1];
    let priority = task_info[2];
    let completed = false;

    let task_data = [title, description, priority, completed];

    /*
    const ToggleComplete = () => { 
        completed = !completed;
    }
    
   

    const PrintTask = () => {
        return `${title.getItem()}, ${description.getItem()}, ${priority.getItem()}, ${completed}`;
    }
      */
    return {task_data}
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

    return {item, getItem, updateItem, capataliseItem}
}

export {Task, TaskObject, ToggleComplete}