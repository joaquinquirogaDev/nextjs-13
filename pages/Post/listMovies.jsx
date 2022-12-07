const fetch = async () => {
    return fetch("https://api.themoviedb.org/3/movie/550?api_key=03527e2f22454dfccfcedb5e1fbb4e00", { next: { revalidate: 10 }})
    .then(res => res.json())
}

export async function listMovies({params}){
    
    const data = await fetch();
    const movies = await data

return data
}

