function generateRelatedPhenom(event) {
    event.preventDefault();

    let relatedPhenom = document.querySelector("#related-phenom");
    relatedPhenom.innerHTML = "List of Related Phenomena will go here.";
}

let phenomFormElement = document.querySelector("#phenom-generator-form");
phenomFormElement.addEventListener("submit", generateRelatedPhenom);