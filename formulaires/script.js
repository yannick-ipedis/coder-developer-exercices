document.addEventListener("DOMContentLoaded", function () {

    // Validate Form on submit
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        let validate = 0;

        // Validate all numeric fields
        document.querySelectorAll(".numeric").forEach(function (field) {
            validateNumber(field);
        });

        // Validate all required fields
        document.querySelectorAll(".required-field").forEach(function (field) {
            const fieldValue = field.value.trim();
            if (fieldValue === "") {
                validate++;
                showErrorMessage(field);
                addAria(field);
            } else {
                hideErrorMessage(field);
                removeAria(field);
            }
        });

        // Validate all checkboxes
        document.querySelectorAll(".checkbox").forEach(function (checkbox) {
            if (!checkbox.checked) {
                validate++;
                showErrorMessage(checkbox);
                addAria(checkbox);
            } else {
                hideErrorMessage(checkbox);
                removeAria(checkbox);
            }
        });

        if (validate !== 0) {
            const firstInvalidField = document.querySelector("[aria-invalid]");
            if (firstInvalidField) {
                firstInvalidField.focus(); // Set focus on the first invalid field
            }
            event.preventDefault();
        } else {
            event.preventDefault(); // Replace this with actual form submission logic
        }
    });

    // Validate numeric fields
    function validateNumber(field) {
        const value = field.value.trim();
        const limit = field.id === "p_num" ? 8 : 5;
        const reg = /^\d+$/; // Regex for numeric values

        if (!reg.test(value) || value.length < limit) {
            showErrorMessage(field);
            addAria(field);
        } else {
            hideErrorMessage(field);
            removeAria(field);
        }
    }

    // Show error message
    function showErrorMessage(field) {
        const errorMessage = field.parentElement.querySelector(".error-message");
        if (errorMessage) {
            errorMessage.style.display = "block";
        }
    }

    // Hide error message
    function hideErrorMessage(field) {
        const errorMessage = field.parentElement.querySelector(".error-message");
        if (errorMessage) {
            errorMessage.style.display = "none";
        }
    }

    // Add accessibility attributes to invalid fields
    function addAria(field) {
        
    }

    // Remove accessibility attributes from valid fields
    function removeAria(field) {
        
    }

});
