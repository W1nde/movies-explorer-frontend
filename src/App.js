import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Mark</Link>
                <Link to="/nikita">Nikita</Link>
            </nav>
            <Routes>
                <Route path="/" element={<div>Hello Mark</div>} />
                <Route path="/nikita" element={<div>Hello Nikita</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
