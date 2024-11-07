import { ToggleComplete } from "./tasks.js";

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

    const DOMTable = document.createElement('table');
    
    // Header
    var tr = TableRow();
    headers.forEach(element => {
        let headercell = TableCell('th', element)
        tr.appendChild(headercell);
    });
    DOMTable.appendChild(tr);


    // Tasks
    
    project.tasks.forEach(task => {
        //console.log(task)
        var tr = TableRow();
        let count = 0;
        task.task_data.forEach(taskItem => {
            
            //console.log(task)
            
            if (count == 3) {
                var td = document.createElement('td');
                td.textContent = taskItem;
                td.addEventListener("click", () => ToggleComplete(task, project))
            } else {
                var td = TableCell('td', taskItem);
            }
            tr.appendChild(td);
            count = count + 1;
        })
        DOMTable.appendChild(tr);
    })
        



    return DOMTable



};
    

    




