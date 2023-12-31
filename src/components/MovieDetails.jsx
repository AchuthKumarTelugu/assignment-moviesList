import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
export default function MovieDetails() {
    let [movie, setMovie] = useState()
    const { state } = useLocation()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${state}?api_key=c49d68720978f410e5623716625cbe43`).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            setMovie(data)
            console.log('movie :', movie)
        })
    }, [state])
    useEffect(() => {
        console.log('movie :', movie);
        }
    , [movie])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className="app-movieDetails">
            {
                movie && movie.poster_path ? (
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1} className="grid">

                            <Grid item xs={4}>
                                <Item className="item item1">
                                    <img src={` https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="movie-poster" />
                                </Item>
                            </Grid>
                            <Grid item xs={8}>
                                <Item className="item item2">
                                    <h2>{movie.title}</h2>
                                    <h5>{movie.tagline}</h5>
                                    <p>{movie.overview}</p>
                                    <div className="movie-info">
                                        <h6>Released on {movie.release_date}</h6>
                                        <h6>total collections : ${movie.revenue} dollars</h6>
                                        <h6>Total Runtime :{movie.runtime} min</h6>
                                        
                                    </div>
                                    </Item>
                            </Grid>
                        </Grid>
                    </Box>
                ) :
                <div>data not retreived</div>
            }

        </div>
    )
}