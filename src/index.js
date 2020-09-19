function main(){
fetchDogImages()
fetchDogIndex()
}

function fetchDogImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(dogs => showDogs(dogs))
}

function showDogs(dogs){
    const dogDiv = document.getElementById('dog-image-container')
    dogs.message.forEach(dog => {
        let imgTag = document.createElement('img')
        imgTag.src = dog
        dogDiv.appendChild(imgTag)
    })
}

function fetchDogIndex(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(dogs => dogIndex(dogs))
}


let dogColor = false 




function dogIndex(dogs){
    const dogBreedsLi = document.getElementById('dog-breeds')
    for (const dogBreed in dogs.message){
        const breedDropdwn = document.getElementById("breed-dropdown")
        let dogList = document.createElement('ul')
        let firstLetterOfDog = dogBreed.split('')[0]
        dogList.className = "dogBreeds"
        dogList.innerText = dogBreed
        dogList.hidden = true 
        dogBreedsLi.appendChild(dogList)
        breedDropdwn.addEventListener('change', e => {
            if (firstLetterOfDog === e.target.value) {
                dogList.hidden = false
            } else if (firstLetterOfDog !== e.target.value) {
                dogList.hidden = true
            }
        })
    }
    dogBreedsLi.addEventListener("click", e => {
        if (e.target.className === "dogBreeds" && dogColor === false ) {
            e.target.style.color = "green"
            
        } else if (e.target.className === "dogBreeds" && dogColor === true ) {
            e.target.style.color = "black"
            
        }
        dogColor = !dogColor
    })
}


 



main()