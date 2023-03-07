import { Route, Routes } from 'react-router';
import './App.css';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import style from './styleModules/Header.module.css';
import art from './assets/man.png';

function App() {
  return (
    <>
      <div className={style.header}>
        <div className={style.topicBox}>
          <img className={style.man} alt="man" src={art} />
          <h1 className={style.topic}>Math Magician</h1>
        </div>
        <nav className={style.navBox}>
          <ul className={style.nav}>
            <li><Link to="/">Home</Link></li>
            <span className={style.divider}>|</span>
            <li><Link to="/Calculator">Calculator</Link></li>
            <span className={style.divider}>|</span>
            <li><Link to="/Quote">Quote</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
