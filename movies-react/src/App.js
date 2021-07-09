import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Movielist from "./components/movies/Movielist";

function App() {
  const [nowPlayingMovie, setNowPlayingMovie]=useState("");
  const [inputValue, setInputValue] = useState('');

  const apiKey="54d6f0bcfcc31734859f6f025c88446b";

  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then((response)=>{setNowPlayingMovie(response.data)})
      .catch((err) => {
        if (err){
        console.log(err);
      }})
    },[])

  const searchMovie=((inputValue)=>{
    if (!inputValue) {
      return 
   }
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}`)
    .then((response)=>{setNowPlayingMovie(response.data)})
    .catch((err) => {if (err){console.log(err.response)}});
  });


  useEffect(() => {
    searchMovie(inputValue);
  }, [inputValue]);


  return (
    <>
    <div className="App">
      <header >
        <Header nowPlayingMovie={nowPlayingMovie}inputValue={inputValue} setInputValue={setInputValue} />
        <Movielist nowPlayingMovie={nowPlayingMovie}/>
        <Footer/>
      </header>
    </div>
    </>
  );
}

export default App;
