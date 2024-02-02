import {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import MoviesList from "./components/MoviesList";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";

import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {

  //* if the useState is null instead of [], need to add movies && movies.map
  //* on the MovieList component file
  const [movies,setMovies] = useState([]);
  const [theme, setTheme] = useState('light');
  const [user,setUser] = useState(null);

  //* useEffect: first parameter is a callback function, second is an array with the dependencies
  useEffect(()=>{
    //* connect to the backend callback function
    const fetchData = async () => {
      const res = await fetch('https://movie-fullstack-backend-4bqg.onrender.com/api/movies')
      const data = await res.json();
      console.log(data);

      //* set data to the state movies variable, will trigger a rerender
      setMovies(data);
    }
    fetchData(); //* call function

  }, []);

  //* anything outside the route tags will always show
  return (
   <UserContext.Provider value = {{user,setUser}} >
   <ThemeContext.Provider value ={{theme, setTheme}}>
    <div className="App">

      <h1> Movies Directory</h1>
      <h3> Full Stack App</h3>
      <br/>
      <br/>
      {user ? (
      <>
      <NavBar />
      <br/>

      <Routes> 
        <Route path="/" element= {<MainPage />} />
        <Route path ='/movies' element= {< MoviesList movies={movies} />}/>
        <Route path ='/movies/:id' element={ <MovieDetails /> }/>
      </Routes>
      </>

  ) : (
    <MainPage />
  )}
  
    </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
