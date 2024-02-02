
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails (){

    const params = useParams();
    const [movie, setMovie] =useState(null);
    
    useEffect(() => {
        
        //* function to fetch movie by ID with try and catch
        const fetchData = async ()=>{
            try {
                const res = await fetch(`https://movie-fullstack-backend-4bqg.onrender.com/api/movies/${params.id}`);
                const data = await res.json();
                console.log(data);
                setMovie(data);
                
            } catch (error) {
                console.log(error);
                
            }
          } 
          fetchData();

        }, []);
    

    return(
        <div>

                {movie && (
                    <>
                        <h4> Movie Details</h4>
                        <h5> {movie.title}</h5>
                    </>

                )}

        </div>
    
    );
}

export default MovieDetails;