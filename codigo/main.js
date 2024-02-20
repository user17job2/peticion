let pages = 1;
const after = document.getElementById('after');
const before = document.getElementById('before');

after.addEventListener('click', () =>{
    if(pages < 1000){
        pages += 1 ;
        chargeMovies();
    }
})
before.addEventListener('click', () =>{
    if(pages > 1){
        pages -= 1 ;
        chargeMovies();
    }
})


const chargeMovies = async() => {
    
    try{
       const respons =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8799f7e10249a43c7398705ca2282cc6&page=${pages}`);    //&language=es-ES, 
    //    console.log(respons)

  //     https://api.themoviedb.org/3/movie/popular?api_key=8799f7e10249a43c7398705ca2282cc6

        if(respons.status === 200){
            const datos = await  respons.json();

            let movies = '';
            datos.results.forEach(pelicula => {
                // console.log(pelicula);

            movies += `
                <div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                </div>

                <h1 class="titulo">${pelicula.title}</h1>
                `;
            });
            document.getElementById('contenedor').innerHTML=  movies; 
        }
        else{console.log("url movie not found")}    
    }
    catch(error){
        console.log('error');
    }
}
chargeMovies();