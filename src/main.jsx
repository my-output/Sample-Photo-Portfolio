import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Card from './components/Card';
import Projects from './pages/projects';
import './main.css';

function Hero() {
  return (
    <div >
        <nav className='hero'>
            <h1>Photo Portfolio</h1>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
        </nav>
        <Outlet />
    </div>
  );
}
export default function App() {
  return (
    <Router>      
      <Routes>
        <Route path='/' element={<Hero />}>
            <Route path="/projects" element={<Projects />}/>
            <Route index element={<Card />} />
        </Route>
      </Routes>
    </Router>
  );
}   

createRoot(document.getElementById('root')).render(<App />);