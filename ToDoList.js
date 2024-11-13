import {User} from "./user.js"
import {Printer} from "./printer.js"

import { DOMUpdate } from "./DOMController.js"
import { DomListeners } from "./ButtonListeners.js";



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

// Create user
const user1 = new User('Rob');

// Create 2 projects
user1.createProject('Robs Project');
user1.createProject('Elens Project');
user1.createProject('Bluebells Project');

// Create tasks
user1.createTask(task1, 0)
user1.createTask(task2, 0)
user1.createTask(task2, 1)


console.log(user1)

const printer = new Printer();

printer.printTasks(user1, 0)
user1.projects[0].projectTasks[0].toggleComplete()
printer.printTasks(user1, 0)

printer.printProjects(user1)


DOMUpdate.listProjects(user1)


const x = new DomListeners()
x.AddProjectButton(user1)
