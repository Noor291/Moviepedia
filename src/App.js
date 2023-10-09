import axios from 'axios';
//react slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//routing
import {Routes,Route} from "react-router-dom"
//pages
import MoviePage from './pages/Movie.page';
import HomePage from './pages/Home.page';
import Movie from './pages/Movie';
import Tv from './pages/Tv';
import TvPage from './pages/Tv.page';

axios.defaults.baseURL="https://api.themoviedb.org/3"
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path="/movie/:id" element={<MoviePage/>}></Route>
      <Route path="/tv/:id" element={<TvPage/>}></Route>
      <Route path="/movies" element={<Movie/>}></Route>
      <Route path="/tvshows" element={<Tv/>}></Route>
    </Routes>
  );
}
export default App;
