import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
