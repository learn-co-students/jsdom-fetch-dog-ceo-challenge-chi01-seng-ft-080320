
//variables

//functions
function fetchImage(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then (resp => resp.json())
        .then (dogs => appendDogImages(dogs))
}


function appendDogImages(dogs){
    dogs["message"].forEach(function(dog){
        let imageTag = document.createElement("img")
        imageTag.src=dog
        let dogContainer = document.getElementById("dog-image-container")
        dogContainer.append(imageTag)
    })
}

function fetchBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
        .then (resp => resp.json())
        .then (breeds => appendBreeds(breeds))
}

function appendBreeds(breeds){
    Object.keys(breeds.message).forEach(function(breed){
        let liTag = document.createElement("li")
        liTag.innerHTML = breed 
        let breedContainer = document.getElementById("dog-breeds")
        breedContainer.append(liTag)
    })
}

//invoked functions
fetchImage()
fetchBreeds()