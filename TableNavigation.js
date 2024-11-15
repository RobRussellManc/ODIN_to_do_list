export const TableNavigation = (function () {
    let rowsPerPage = 10; // Number of rows per page
    

    // Reference to buttons
    let prevButton, nextButton;
    let currentPage;
    let prevButtonClickHandler, nextButtonClickHandler; // Persist handlers

    const init = (taskTable, prevBtnSelector, nextBtnSelector) => {
        currentPage = 1;
        console.log(currentPage);
    
        // Select buttons
        const newPrevButton = document.querySelector(prevBtnSelector);
        const newNextButton = document.querySelector(nextBtnSelector);
    
        // Remove previous event listeners if they exist
        if (prevButton && prevButtonClickHandler) {
            prevButton.removeEventListener("click", prevButtonClickHandler);
        }
        if (nextButton && nextButtonClickHandler) {
            nextButton.removeEventListener("click", nextButtonClickHandler);
        }
    
        // Update button references
        prevButton = newPrevButton;
        nextButton = newNextButton;
    
        // Define new event handlers
        prevButtonClickHandler = () => {
            if (currentPage > 1) {
                currentPage--;
                renderTaskTable(taskTable);
            }
        };
    
        nextButtonClickHandler = () => {
            const totalPages = Math.ceil(taskTable.children.length / rowsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderTaskTable(taskTable);
            }
        };
    
        // Attach new event listeners
        prevButton.addEventListener("click", prevButtonClickHandler);
        nextButton.addEventListener("click", nextButtonClickHandler);
    };



    const renderTaskTable = (taskTable) => {
        const allRows = Array.from(taskTable.children).slice(1); // Exclude header row
        const totalPages = Math.ceil(allRows.length / rowsPerPage);
        console.log(currentPage)
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
