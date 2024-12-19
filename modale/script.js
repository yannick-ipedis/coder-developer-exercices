
// Selecting the dialog button
const dialogBtn = document.querySelector('.btn-primary');

// Selecting the dialog parent tag
const dialogWindow = document.querySelector('.dialog');

// Select the overlay background
const overlayBackground = document.querySelector('.overlay-background');

// Hide the dialog and it's overlay when the dialog is closed
dialogWindow.style.display = 'none';
overlayBackground.style.display = 'none';

// Add the event so that the dialog pops up with a simple click event
dialogBtn.addEventListener('click', function() {
    dialogWindow.style.display = 'block';
    overlayBackground.style.display = 'block';
    // Set the focus on the close button of the dialog upon it's appeareance
    closeModal.focus();
    // Trap the focus inside the dialog
    trapFocus(dialogWindow);
})

// Close the modal window 
const closeModal = document.querySelector('.close-dialog');
closeModal.addEventListener('click', function(){
    // hide hide the dialog and it's overlay 
    dialogWindow.style.display = 'none';
    overlayBackground.style.display = 'none';
    // Return focus on the button that opens the dialog upon it's closure
    dialogBtn.focus();
})

// Add the possibility to close the dialog use the ESC / Escape key of the keyboard
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        dialogWindow.style.display = 'none';
        overlayBackground.style.display = 'none';
    // Return focus on the button that opens the dialog upon it's closure
        dialogBtn.focus();
    }
});

// Making sure the focus does not leave the dialog and stays only on elements inside of the dialog to ensure a logical tab order
function trapFocus(dialogWindow) {
    const focusableElements = dialogWindow.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    dialogWindow.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    event.preventDefault();
                }
            }
        }       
    });
}
