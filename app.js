
let input = document.querySelector('#search');
let btn = document.querySelector('#btn');
let movies = document.querySelector('.movies')
let img = document.querySelectorAll('img')

function firstApi() {
    let id = input.value;

    if (id) {
        fetch(`https://imdb-api.com/en/API/SearchMovie/k_qurnm24m/${id}`)
            .then(res => res.json())
            .then(data => data.results)
            .then(finalData => {
                youtube(finalData)
                
            });
    } else {
        alert('Please provide the valid movie name');
    }
    input.value=''
}

btn.addEventListener('click', () => {
  
    firstApi()

});

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        firstApi()
    }
})

function youtube(id) {

    for (let i = 0; i < id.length; i++) {
        fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_qurnm24m/${id[i].id}`)
            .then(res => res.json())
            .then(ss => {

    

                if (ss.title !== null) {
                    let ff=` <div class="movie">
                    <div class="img">
                      <img src="${id[i].image}" alt="Image not found">
                    </div>
            
                    <div class="info">
                      <p class="name"><b>Name:</b> <span>${ss.title}</span> </p>
                      <p class="year"><b>Year:</b> <span>${ss.year}</span></p>
                      <a href="${ss.videoUrl?ss.videoUrl:'./notFound.html'}" target="_blank">Watch Trailer</a>
                    </div>
                  </div>`
                
                    movies.insertAdjacentHTML('beforeend',ff)
                } 

                
            })
 
            movies.innerHTML=''

    }

}