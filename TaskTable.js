import { DOMUpdate } from "./DOMController.js";

function TableRow() {
    return document.createElement('tr');
}

function TableCell(type, content, ) {
    let tc = document.createElement(type);
    tc.textContent =content ;
    return tc;

}

export function TaskTable(project) {

    const headers = ['Title', 'Description', 'Priortiy', 'Completed?']
    //const headers = Object.keys(project.projectTasks[0].task);

    const DOMTable = document.createElement('table');
    
    // Header
    var tr = TableRow();

    headers.forEach(element => {
        let headercell = TableCell('th', element);
        headercell.classList.add(element);
        tr.appendChild(headercell);
    });
    DOMTable.appendChild(tr);


    // Tasks
    for (let task_key in project.projectTasks) {
        let task = project.projectTasks[task_key];
        let task_data = project.projectTasks[task_key].task;
        //console.log(task_data)
        var tr = TableRow();
        let count = 0;
        for (let data_item_key in task_data) {
            let task_data_item = task.task[data_item_key];
            //console.log(task_data_item)
            
            if (data_item_key == 'completed') {
                var td = document.createElement('td');
                td.textContent = task_data_item;
                //console.log(task);
                td.addEventListener("click", () => {
                    task.toggleComplete()
                    DOMUpdate.updateTaskTable(project);
            })
            } else {
                var td = TableCell('td', task_data_item);
            }
            tr.appendChild(td);
            count = count + 1;
        }
            DOMTable.appendChild(tr);
        }
        


    
    return DOMTable



};
    

    




