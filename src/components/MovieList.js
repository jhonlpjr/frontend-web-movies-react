import { useState, useEffect } from 'react';
import MovieService from '../services/MovieService';
import { Link } from 'react-router-dom';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState
    useEffect(() => {
        retrieveMovies();
    }, []);

    const retrieveMovies = () => {
        MovieService.getAll()
        .then(response => {
            setMovies(response.data);
            console.log(movies);
        })
        .catch(err => {
            alert('Ocurrió un error');
            console.log(err);
        });
    };

    const refreshList = () => {
        retrieveMovies();
    };

    return (
        <div className="row">
            <div className="col-6">
                <h4>Películas</h4>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Título</th>
                    <th scope="col">Año</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {movies && 
                        movies.map((movie, index) => (
                            <tr key={index}>
                            <th>{movie.id}</th>
                            <td>{movie.title}</td>
                            <td>{movie.year}</td>
                            <td></td>
                            </tr>   
                        ))
                    }
    
                </tbody>
                </table>
            </div>
            <div className="col-6">Hola</div>
        </div>
    )
};

export default MovieList;