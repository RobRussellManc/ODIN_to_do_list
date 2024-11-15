export const TableNavigation = (function () {
    let rowsPerPage = 10; // Number of rows per page
    let currentPage = 1;

    // Reference to buttons
    let prevButton, nextButton;

    const init = (taskTable, prevBtnSelector, nextBtnSelector) => {
        prevButton = document.querySelector(prevBtnSelector);
        nextButton = document.querySelector(nextBtnSelector);

        // Attach button event listeners
        prevButton.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderTaskTable(taskTable);
            }
        });

        nextButton.addEventListener("click", () => {
            const totalPages = Math.ceil(taskTable.children.length / rowsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderTaskTable(taskTable);
            }
        });
    };

    const renderTaskTable = (taskTable) => {
        const allRows = Array.from(taskTable.children).slice(1); // Exclude header row
        const totalPages = Math.ceil(allRows.length / rowsPerPage);

        allRows.forEach((row, index) => {
            row.style.display =
                index >= (currentPage - 1) * rowsPerPage && index < currentPage * rowsPerPage
                    ? "table-row"
                    : "none";
        });

        // Enable/disable buttons
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages || totalPages === 0;
    
        displayPageNumber(currentPage, totalPages);
    };



    const displayPageNumber = (currentPage, totalPages) => {
        const displayPageNum = document.querySelector(".display_page_number");
        if (totalPages == 0 ){
            displayPageNum.innerHTML = `Page ${currentPage}`
        } else {
        displayPageNum.innerHTML = `Page ${currentPage} of ${totalPages}`;
        }
    }

    return {
        init,
        renderTaskTable, // Export if external trigger is needed
    };
})();
