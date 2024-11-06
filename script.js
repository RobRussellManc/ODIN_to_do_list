console.log('hi')

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = new TaskStorage();
    }
}

class TaskStorage {
    constructor() {
        this.tasks = [];
    }

    addTask = (title, description, priority) => {
        this.tasks.push(createTask(title, description, priority))
    }

    deleteTask = (taskNumber) => {
        this.tasks.splice(taskNumber, 1);
    }

    printTasks = () => printTasks(this.tasks);
}




function printTasks(taskStore) {
    taskStore.forEach(element => {
        console.log(`Title: ${element.title.item}, Desc: ${element.description.item}, Priority: ${element.priority.item}`)
    });
}


function createTask(title_, description_, priority_) {
    const title = new TaskItem(title_);
    const description = new TaskItem(description_);
    const priority = new TaskItem(priority_);

    return {title, description, priority}
}


class TaskItem {
    constructor(item) {
        this.item = item;
    }

    getItem = () => {
        return this.title;
    }

    updateItem = (newTitle) => {
        this.title = newTitle;
    }
}





const storage1 = new Project('Project1');

storage1.tasks.addTask('Tasks title', 'A task desc', 'priority')
storage1.tasks.addTask('Tasks title2', 'A task desc2', 'priority2')

//storage1.printTasks();

//console.log(storage1.storage[0].title.getTitle())

//const test = new Task('Tasks title', 'A task desc', 'priority')

//console.log(test.title)