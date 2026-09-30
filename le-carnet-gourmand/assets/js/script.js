"use strict";

// Sélection des éléments déjà présents dans le HTML.
const form = document.querySelector("#comment-form");
const authorInput = document.querySelector("#author");
const commentInput = document.querySelector("#comment");
const errorMessage = document.querySelector("#form-error");
const commentsList = document.querySelector("#comments-list");
const statusMessage = document.querySelector("#comment-status");

function clearError() {
    errorMessage.textContent = "";
    errorMessage.hidden = true;
    authorInput.removeAttribute("aria-invalid");
    commentInput.removeAttribute("aria-invalid");
    authorInput.setAttribute("aria-describedby", "author-help");
    commentInput.setAttribute("aria-describedby", "comment-help");
}

function showError(message, input, helpId) {
    errorMessage.textContent = message;
    errorMessage.hidden = false;
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", helpId + " form-error");
    input.focus();
}

// Cette fonction sert aux exemples initiaux et aux nouveaux commentaires.
function enableDeletion(button, card) {
    button.addEventListener("click", function () {
        card.remove();
        statusMessage.textContent = "Commentaire supprimé.";
        authorInput.focus();
    });
}

const initialComments = document.querySelectorAll(".comment-card");
initialComments.forEach(function (card) {
    enableDeletion(card.querySelector(".delete-button"), card);
});

form.addEventListener("submit", function (event) {
    // Empêche la soumission habituelle et donc le rechargement de la page.
    event.preventDefault();
    clearError();
    statusMessage.textContent = "";

    // Les espaces seuls ne sont pas un nom ou un commentaire valide.
    const author = authorInput.value.trim();
    const comment = commentInput.value.trim();

    if (author.length < 2) {
        showError("Le nom doit contenir au moins 2 caractères.", authorInput, "author-help");
        return;
    }

    if (comment.length < 10) {
        showError("Le commentaire doit contenir au moins 10 caractères.", commentInput, "comment-help");
        return;
    }

    // Création des éléments un par un : le texte saisi reste du texte.
    const card = document.createElement("article");
    card.className = "comment-card";

    const authorHeading = document.createElement("h3");
    authorHeading.className = "comment-author";
    authorHeading.textContent = author;

    const commentText = document.createElement("p");
    commentText.className = "comment-text";
    commentText.textContent = comment;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "🗑️ Supprimer";
    deleteButton.setAttribute("aria-label", "Supprimer le commentaire de " + author);
    enableDeletion(deleteButton, card);

    card.appendChild(authorHeading);
    card.appendChild(commentText);
    card.appendChild(deleteButton);
    commentsList.prepend(card);

    form.reset();
    statusMessage.textContent = "Votre commentaire a été publié.";
    authorInput.focus();
});
