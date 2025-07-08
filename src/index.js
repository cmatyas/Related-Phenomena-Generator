function displayRelatedPhenom(response) {

    let generatingNotice = document.querySelector("#notice");
    generatingNotice.classList.add("hidden"); 

    let relatedPhenom = document.querySelector("#generation")
    relatedPhenom.classList.remove("hidden");

    let relatedPhenomOne = document.querySelector("#related-phenomenon-one");
    let relatedPhenomTwo = document.querySelector("#related-phenomenon-two");
    let relatedPhenomThree = document.querySelector("#related-phenomenon-three");
    relatedPhenomOne.innerHTML = response[0];
    relatedPhenomTwo.innerHTML = response[1];
    relatedPhenomThree.innerHTML = response[2];
}


function splitString(response) {
  let relatedPhenomena = response.data.answer
  const newPhenom = relatedPhenomena.split("$$");
    console.log(newPhenom);
  displayRelatedPhenom(newPhenom);
}


function generateRelatedPhenom(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "dea7930290bf9064796ot2c1b9b4c9a7";
    let context = "You are an expert in the Next Generation Science Standards, OpenSciEd pedagogy, and science storylines. You know what phenomena would be interesting to students and those that could span an entire science unit."
    let prompt = `User instructions: Please generate a list of three phenomena related to ${instructionsInput.value}. Include $$ between each phenomenon example. Please do not include any introductory text or other information besides the three examplees.`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let generatingRow = document.querySelector("#results");
    generatingRow.classList.remove("hidden");  

    axios.get(apiURL).then(splitString)
}

let phenomFormElement = document.querySelector("#phenom-generator-form");
phenomFormElement.addEventListener("submit", generateRelatedPhenom);