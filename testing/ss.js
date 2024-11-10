console.log('hi')

/*

function Project (name_) {
    let projectName = name_;
    let tasks = [];

    const AddTask = Task();

    const deleteTask = (taskNumber) => {
        tasks.splice(taskNumber, 1);
    }

    const printTasks = () => print_Tasks(tasks);
  
    return {projectName, tasks, AddTask, deleteTask, printTasks}
}

*/


function Project(title) {
    const projectTasks = [];
    return {title, projectTasks }
}


const ProjectActions = (function () {
    const CreateProject = (projectName) => { 
        ProjectList.push(Project(projectName))
    }

    const deleteProject = (projectNumber) => {
        ProjectList.splice(projectNumber, 1)
    }

    const listProjects = () => {
        ProjectList.forEach(element => {
            console.log(element.projectName)
            
        });
    }

    const AddTask = () => Task();

    return {CreateProject, deleteProject, listProjects, AddTask}
})();


function createProject(projectName) {
    ProjectActions.addProject(projectName);
}






function Task(title_, description_, priority_) {
    const title = TaskItem(title_);
    const description = TaskItem(description_);
    const priority = TaskItem(priority_);
    const completed = false;

    const task = () => {
        {title, description, priority, completed};
    }


    const ToggleComplete = () => { 
        completed = !task.completed;
    }

        
    return {task, ToggleComplete}
}


/*
function createTask(title_, description_, priority_) {
    const title = TaskItem(title_);
    const description = TaskItem(description_);
    const priority = TaskItem(priority_);
    const completed = false;
    return {title, description, priority, completed}
}


function AddTask(project, title, description, priority) {
    project.tasks.push(createTask(title, description, priority));
}
function ToggleComplete(task) {
    task.completed = !task.completed;
}



*/





function print_Tasks(taskStore) {
    taskStore.forEach(element => {
        console.log(`Title: ${element.title.getItem()}, Desc: ${element.description.getItem()}, Priority: ${element.priority.getItem()}, Completed: ${element.completed}`)
    });
}

ProjectList = []



function TaskItem(item_) {
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

    return {getItem, updateItem, capataliseItem}
}



createProject('MyProject')

createProject('2nd Project')

ProjectList.projects[0].AddTask('Tasks title', 'A task desc', 'priority' )


/*


AddTask(Projects.projects[0], 'Tasks title2', 'A task desc2', 'priority2' )
AddTask(Projects.projects[0], 'Tasks title3', 'A task desc3', 'priority3' )


AddTask(Projects.projects[1], 'AAAAAAA', 'A task desc', 'priority' )
AddTask(Projects.projects[1], 'TBBBBBBBB', 'A task desc2', 'priority2' )
AddTask(Projects.projects[1], 'TaCCCCCCCCCCC3', 'A task desc3', 'priority3' )

Projects.projects[0].printTasks()
Projects.projects[0].tasks[1].title.capataliseItem();
Projects.projects[0].printTasks()

Projects.projects[0].deleteTask(1);

Projects.projects[0].printTasks()

Projects.projects[1].printTasks()
Projects.projects[1].tasks[1].title.capataliseItem();
Projects.projects[1].printTasks()

Projects.projects[1].deleteTask(2);

Projects.projects[1].printTasks()





const Project1 = Project('Project1');

createTask(Project1,'Tasks title', 'A task desc', 'priority' )
createTask(Project1,'Tasks title2', 'A task desc2', 'priority2' )

//console.log(Project1.tasks[0].title.getItem())

//Project1.addTask('Tasks title', 'A task desc', 'priority')
//Project1.addTask('Tasks title2', 'A task desc2', 'priority2')


Project1.printTasks();
console.log(Project1.tasks[1].title.getItem());
Project1.tasks[1].title.capataliseItem();
console.log(Project1.tasks[1].title.getItem());


//storage1.printTasks();

//console.log(storage1.storage[0].title.getTitle())

//const test = new Task('Tasks title', 'A task desc', 'priority')

//console.log(test.title)

*/