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


    const ToggleComplete = () => { 
        completed = !completed;
    }

    const PrintTask = () => {
        return `${title.getItem()}, ${description.getItem()}, ${priority.getItem()}, ${completed}`;
    }
     
    return {task_data, PrintTask, ToggleComplete}
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

export {Task, TaskObject}