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


export {Printer}