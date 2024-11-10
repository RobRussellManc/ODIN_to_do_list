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

class Printer {
    printTasks(user, projectIndex) {
        const project = user.projects[projectIndex].projectTasks;
        for (let key in project) {
            console.log(project[key].toString())
        }
    }

    printProjects(user) {
        for (let key in user.projects) {
            console.log(user.projects[key].toString());
        }
    }
}

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

let task1 = {
    title: "Finish project",
    description: "Complete all pending items", 
    priority: "High",
    completed: false
};

const task2 = {
    title: "Complete design tasks",
    description: "Work on the UI design", 
    priority: "Medium",
    completed: true
};





const user1 = new User('Rob');

user1.createProject('Robs Project');
user1.createProject('Elens Project');
user1.createTask(task1, 0)
user1.createTask(task2, 0)
user1.createTask(task2, 1)




const printer = new Printer();


printer.printTasks(user1, 0)
printer.printProjects(user1)



