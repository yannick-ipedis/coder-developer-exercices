const form = document.getElementById('emailForm');
const statusMessageVisible = document.getElementById('statusMessage');
const statusMessage = "Votre email a bien été envoyé !"
const errorMessage = "Vous n'avez pas ajouté votre email !"

form.addEventListener('submit', (e) => {
    var email = document.getElementById("email").value;
    e.preventDefault();
    statusMessageVisible.textContent = "";
    statusMessageVisible.className = "status-message";
    statusMessageVisible.style.display = "none";

    if (email != ""){
        // Display visible status message
        statusMessageVisible.textContent = statusMessage;
        statusMessageVisible.className = "status-message success";
        statusMessageVisible.style.display = "block";
    }
    else{
        // Display visible error message
        statusMessageVisible.textContent = errorMessage;
        statusMessageVisible.className = "status-message error";
        statusMessageVisible.style.display = "block";
    }
});