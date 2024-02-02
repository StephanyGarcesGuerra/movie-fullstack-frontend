
import MovieItem from "./MovieItem";
import Spinner from 'react-bootstrap/Spinner';

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


function MoviesList({movies}) {

    const themeCtx = useContext(ThemeContext);
    const {theme} = themeCtx;

    return (
        // <div 
        // style={{
        //     backgroundColor: theme === 'light' ? "#fff" : '#000'
        // }}>
            < div className ={theme === 'light' ? 'lightMode' : 'darkMode'}>
            <h2> Movies List </h2>

            <div>
                {/* //* here you would add "movies && movies.map" if the useState 
                //*     is null and not an empty array [] */}
                {movies.length >= 1 ?
                    movies.map((movie) => <MovieItem movie ={movie} key ={movie.id}/>)
                    :
                    <Spinner animation="border" variant = "info" size ="xl"> Loading </Spinner>
                    // <h2> Loading movies ... </h2>
                }
            </div>
        </div>
    );
}

export default MoviesList;