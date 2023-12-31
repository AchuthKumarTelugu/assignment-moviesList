
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import axios from "axios";
export default function Home({handleMovieClick}) {
    let [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c49d68720978f410e5623716625cbe43`).then(response => {
            console.log(response.data.results)
            setMovies(response.data.results)
        })
    }, [])
    return (
        <div className="app-home">
            <div className="movies-box">
                
                {
                    movies.map((value, index) => {
                        return (
                            <div className="movie" key={index}>
                                <Card onClick={()=>{handleMovieClick(value.id)}}  sx={{ maxWidth: 345 }} className="card">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={` https://image.tmdb.org/t/p/original/${value.poster_path}`}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {value.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {value.overview}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}