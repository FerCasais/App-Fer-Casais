import React from 'react'

const API_KEY = "api_key=649b8663c34d6381caf605aeaa50ecfd";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500/";







const ApiMovie = () => {

  let boton = document.createElement("button");
  boton.innerText = "tocame para ver muchas pelis";
  document.body.appendChild(boton);


  return (async function loadData() {

    const response = await fetch(API_URL);
    const data = await response.json();

 console.log(data.results)

    

    data.results.forEach((element) => {
        console.log(element.title);

     

        let li = document.createElement("h5");
        li.innerText = `Titulo: ${element.title}`;
       document.body.appendChild(li);

        let release = document.createElement('h6')
        release.innerText = `Fecha de lanzamiento: ${element.release_date}`
        ;
        document.body.append(release);

        const seeMovies = document.createElement("img");
        seeMovies.src = IMG_URL + element.backdrop_path;
       document.body. append(seeMovies);

   
    })}
    
    
  )
}

export default ApiMovie