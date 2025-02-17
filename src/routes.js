import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetail from './MovieDetail';
import Header from './components/Header';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/movieDetail/:id' element={<MovieDetail />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;