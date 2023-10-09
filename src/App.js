import axios from 'axios';
//react slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//routing
import {Routes,Route} from "react-router-dom"
//pages
import MoviePage from './pages/Movie.page';
import HomePage from './pages/Home.page';

axios.defaults.baseURL="https://api.themoviedb.org/3"
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path="/item/:id" element={<MoviePage/>}></Route>
      {/* <Route path="/plays" element={<PlayPage/>}></Route> */}
    </Routes>
  );
}
export default App;
