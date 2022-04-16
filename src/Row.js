import React, {useState, useEffect} from 'react'
import instance from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const imagePath = 'https://image.tmdb.org/t/p/original'

export const Row = ({title, fetchUrl}) => {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    const fetchMovies = async() => {
        const {data} =  await instance.get(fetchUrl)
        setMovies(data.results)
        
    }
    
    useEffect(() => {
        fetchMovies()
    }, [])

    console.log(movies)

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('')
        }else {
            movieTrailer(movie.name || '')
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                urlParams.get('v')
            })
            .catch((error) => console.log(error))
        }

    }
    

  return (
    <div className='row'>
        <h2 className='row-title'>{title}</h2>

        <div className='posters-row'>
            {movies.map((movie) => (
                <img key={movie.id} className='poster' src={`${imagePath}${movie.poster_path}`} alt={movie.name} onClick={() => handleClick(movie)}/>
                
            ))}
        </div>

        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        

    </div>
  )
}