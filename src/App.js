import './App.css';
import React,{useState,useEffect} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import NotFound from "./components/NotFound";
import Search from "./components/Search";

const App = ()   => {
  const API_KEY = 'api_key=3bec026e57dda6c5cac472dd0e96cb41';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const FEATURED_API = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
  const SEARCH_API = `${BASE_URL}/search/movie?&${API_KEY}`;
  const [movies,setMovies] = useState([]);
  const [searchInput,setSearchInput] = useState("");
  const [searchMovies,setSearchMovies] = useState([...movies]);
  const [popularMovies,setPopularMovies] = useState([]);
  const getMovies = async() => {
      try{
          const response = await fetch(FEATURED_API);
          const data = await response.json();
          return data.results;
      }catch(error){console.error(error)}
  }

  useEffect(()=>{
      getMovies().then(data =>{
          setMovies(data);
          setSearchMovies(data);
      });
  },[]);
/*
  const getGenres = async () => {
        const response =  await fetch("http://api.themoviedb.org/3/genre/movie/list?api_key=3bec026e57dda6c5cac472dd0e96cb41");
        return response.json();
  }

  useEffect(()=>{
      getGenres().then(response => setCategories(response.genres));
  },[]);
 */

  const handleSearchMovie = async(e) => {
        e.preventDefault();
        if(searchInput==="") {
          setSearchMovies(movies);
          return;
        }
        const response = await fetch(`${SEARCH_API}&query=${searchInput}`);
        const data = await response.json();
        data.results.length >0 ?
            setSearchMovies(data.results)
            : alert( searchInput +" movie not found!");
  }


  const getPopularMovies = async() => {
      const response = await fetch(`${BASE_URL}/discover/movie?${API_KEY}&primary_release_year=2019&sort_by=revenue.desc`)
      const data = await response.json();
      setPopularMovies(data.results);
  }

    return (
     <BrowserRouter>
        <div className="App">
            <Navbar setSearchInput={setSearchInput} searchInput={searchInput} handleSearchMovie={handleSearchMovie}/>
            <Switch>
                <Route exact path="/" render={()=><Movies movies = {movies}/>}/>
                <Route path="/popular" render={()=><Popular getPopularMovies = {getPopularMovies} popularMovies={popularMovies}/>}/>
                <Route path="/search" render={()=><Search searchMovies={searchMovies}/>}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
     </BrowserRouter>
  );
}

export default App;
