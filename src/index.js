

function main(){
    loadImages()
    allDogs()
}

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res => res.json())
      .then(data => { data    
          data.message.forEach(function(url){      
            const imgDiv = document.getElementById('dog-image-container')
            const imgTag = document.createElement('img')
            imgTag.src = url
            imgDiv.append(imgTag)
          })

      })
}

function allDogs(){
    const dogsUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(dogsUrl)
      .then(res => res.json())
      .then(data => { data.message
          for (const breed in data.message) {
                const dogBreed = breed
                const breedsDiv = document.getElementById('dog-breeds')
                const liTag = document.createElement('li')
                liTag.innerText = dogBreed
                liTag.style.display = 'none'
                breedsDiv.append(liTag)

                liTag.addEventListener('click', function(event){
                    event.target.style.color = 'red'
                })
               
            }
        })
}

const dropDown = document.querySelector('#breed-dropdown')
dropDown.addEventListener('change', filterDogs)

function filterDogs(event){
    const liTag = document.getElementsByTagName('li')
    
    // transforms the HTML collection into an array we can call #forEach on
    let liTagArray = Array.from(liTag)
    
    liTagArray.forEach(function(liElement){
    firstLetter = liElement.textContent[0]
        firstLetter === event.target.value ? liElement.style.display = 'block':liElement.style.display = 'none'
    })     
}
    
main()


    