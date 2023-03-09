import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styleModules/Header.module.css';
import art from '../assets/man.png';

const Navigation = () => (
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
);

export default Navigation;
