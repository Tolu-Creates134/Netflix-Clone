import React, { useState, useEffect } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import instance from './axios';
import './Banner.css'

const imagePath = 'https://image.tmdb.org/t/p/original'


export const Banner = ({ fetchUrl }) => {

    const [movie, setMovie] = useState([]);

    const fetchMovie = async () => {
        const { data } = await instance.get(fetchUrl);

        setMovie(data.results[15])
    }


    useEffect(() => {
        fetchMovie();
    }, [])

    console.log(movie)

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;

    }

    return (
        <div className='banner'>

            <div className='banner-content'>
                <h1>{movie.name || movie.title || movie.original_name}</h1>
                <p>{truncate(movie.overview, 150)}</p>
                <div className='banner-buttons'>
                    <button><BsFillPlayFill />Play</button>
                    <button>More Info</button>

                </div>
            </div>



        </div>
    )
}