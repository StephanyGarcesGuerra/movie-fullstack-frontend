
import { Link } from "react-router-dom";

//* add {movie} to bring in the props of movies you used from your MoviesList's movie = {movie}
function MovieItem ({movie}){
    const {title, poster, _id} = movie;
    return(
        <div>
            <Link to = {`/movies/${_id}`}> 
                <h4> {title}</h4>
            </Link>
            {poster ?
            <img src ={poster} alt={title} /> :
            <img src="https://cdn.vectorstock.com/i/1000x1000/74/28/image-unavailable-icon-vector-30057428.webp" alt="No content" />}
        </div>
            //*conditional; if there is a poster use poster link
            //* if there is no poster, then use the src we added
    );
}

export default MovieItem;