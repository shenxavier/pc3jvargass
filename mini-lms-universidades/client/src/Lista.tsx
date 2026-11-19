import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Universidad } from './types';

export default function Lista() {
    const [universidades, setUniversidades] = useState<Universidad[]>([]);
    const [busqueda, setBusqueda] = useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/api/universidades')

            .then((res) => res.json())
            .then((datos: Universidad[]) => {
                setUniversidades(datos);
                setCargando(false);
            })
            .catch((err) => {
                console.error('Error al cargar:', err);
                setCargando(false);
            });
    }, []);

    const filtradas = universidades.filter((u) =>
        u.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>Universidades del Perú</h1>

            <input
                type="text"
                placeholder="Buscar universidad..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                style={{ padding: '8px', width: '320px', marginBottom: '16px' }}
            />

            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <p>Total: {filtradas.length} universidades</p>

                    <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Dominio</th>
                                <th>Web</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtradas.map((u, i) => (
                                <tr key={i}>
                                    <td>{u.nombre}</td>
                                    <td>{u.dominio}</td>
                                    <td>
                                        <a href={u.web} target="_blank" rel="noreferrer">
                                            {u.web}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}

            <p style={{ marginTop: '20px' }}>
                <Link to="/">Volver al inicio</Link>
            </p>
        </div>
    );
}