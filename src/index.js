
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




//invoked functions
fetchImage()