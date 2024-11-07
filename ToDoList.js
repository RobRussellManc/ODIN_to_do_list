import { CreateProject, ProjectActions} from "./projects.js"

import { DOMUpdate } from "./DOMController.js"


CreateProject('MyProject')
CreateProject('2nd Project')
CreateProject('3rd Project')


ProjectActions.getProjectX(0).addTask(['Tasks title1', 'A task desc1', 'priority1'])
ProjectActions.getProjectX(0).addTask(['Tasks title2', 'A task desc2', 'priority2'])
ProjectActions.getProjectX(0).addTask(['Tasks title3', 'A task desc3', 'priority3'])


ProjectActions.getProjectX(2).addTask(['Tasks title1', 'A task desc1', 'priority1'])



ProjectActions.listProjects();

DOMUpdate.listProjects(ProjectActions.getProjects())

DOMUpdate.displayTasks(ProjectActions.getProjectX(0))


//console.log(ProjectActions.getProjectX(0))
/*

ProjectActions.getProjectX(0).addTask(['Tasks title1', 'A task desc1', 'priority1'])
ProjectActions.getProjectX(0).addTask(['Tasks title2', 'A task desc2', 'priority2'])
ProjectActions.getProjectX(0).addTask(['Tasks title3', 'A task desc3', 'priority3'])




ProjectActions.getProjectX(0).listProjectTasks();

ProjectActions.getProjectX(0).listProjectTasks();
ProjectActions.getProjectX(0).getTaskX(0).ToggleComplete()
ProjectActions.getProjectX(0).listProjectTasks();






CreateProject('MyProject')
CreateProject('2nd Project')
CreateProject('3rd Project')



ProjectActions.listProjects();

ProjectStore.projects[0].addTask(['Tasks title1', 'A task desc1', 'priority1'])
ProjectStore.projects[0].addTask(['Tasks title2', 'A task desc2', 'priority2'])
ProjectStore.projects[0].addTask(['Tasks title3', 'A task desc3', 'priority3'])
console.log(ProjectStore.projects[0].tasks[0].PrintTask())



ProjectStore.projects[0].listProjectTasks();
ProjectStore.projects[0].tasks[0].ToggleComplete()
ProjectStore.projects[0].listProjectTasks();







console.log(Projects.projects[0].tasks)

Projects.projects[0].addTask(['Tasks title1', 'A task desc1', 'priority1'])
Projects.projects[0].addTask(['Tasks title2', 'A task desc2', 'priority2'])
Projects.projects[0].addTask(['Tasks title3', 'A task desc3', 'priority3'])


console.log(Projects.projects[0].tasks[0].PrintTask())
Projects.projects[0].tasks[0].ToggleComplete()
console.log(Projects.projects[0].tasks[0].PrintTask())




Projects.deleteProject[1];

Projects.listProjects();

//console.log(Projects.projects[0].tasks[0].title.getItem())
//console.log(Projects.projects[0].tasks[1].title.getItem())

*/

