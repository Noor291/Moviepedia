import './App.css';
//react slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//routing
import {Routes,Route} from "react-router-dom"
//pages
import PlayPage from './pages/Play.page';
import MoviePage from './pages/Movie.page';
import HomePage from './pages/Home.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path="/movie/:id" element={<MoviePage/>}></Route>
      <Route path="/plays" element={<PlayPage/>}></Route>
    </Routes>
  );
}
export default App;
