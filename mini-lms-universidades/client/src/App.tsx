import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Lista from './Lista';

function Inicio() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mini-LMS Universidades</h1>
      <p>Prototipo con React Router, useState y useEffect.</p>
      <Link to="/universidades">Ver universidades →</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: '10px 20px',
          background: '#222',
          color: '#fff',
          display: 'flex',
          gap: '16px',
        }}
      >
        <Link to="/" style={{ color: '#fff' }}>
          Inicio
        </Link>
        <Link to="/universidades" style={{ color: '#fff' }}>
          Universidades
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/universidades" element={<Lista />} />
      </Routes>
    </BrowserRouter>
  );
}