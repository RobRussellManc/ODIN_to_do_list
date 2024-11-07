function TableRow() {
    return document.createElement('tr');
}

function TableCell(type, content) {
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
    console.log(project.tasks);

    
    project.tasks.forEach(task => {
        console.log(task)
        var tr = TableRow();
        task.task_data.forEach(taskItem => {
            console.log(taskItem)
            let tc = TableCell('td', taskItem);
            tr.appendChild(tc);
        })
        DOMTable.appendChild(tr);
    })
        



    return DOMTable



};
    

    




