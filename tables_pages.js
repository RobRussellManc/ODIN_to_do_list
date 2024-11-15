
export const tablePages = (function() {
    // Variables to handle task table pages
    const rowsPerPage = 5;
    let currentPage = 1;

    const prevButton = document.querySelector("#prev-page");
    const nextButton = document.querySelector("#next-page");

    // Function to change table rows to display = None if they don't fit
    function renderTaskTable() {
        
        const allRows = Array.from(taskTable.children).slice(1)

        const totalPages = Math.ceil(allRows.length / rowsPerPage);

        allRows.forEach((row, index) => {
            row.style.display = 
                index >= (currentPage -1) * rowsPerPage && index < currentPage * rowsPerPage
                ? "table-row"
                : "none";
        })
        
        // Enable/disable navigation Complete design tasks"buttons
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages || totalPages === 0;

        console.log(`total pages: ${totalPages}`)
        console.log(currentPage)
    };

    // Next/prev page button click handlers
    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            renderTaskTable()
        }
    })

    nextButton.addEventListener("click", function () {
        const totalPages = Math.ceil(taskTable.children.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTaskTable();
        }
    })

    return {renderTaskTable}
})