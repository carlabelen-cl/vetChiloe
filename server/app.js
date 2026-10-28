import express from 'express';
import cors from 'cors';
import pacientesRoutes from './src/routes/pacientes.routes.js';
import hospitalizacionesRoutes from './src/routes/hospitalizaciones.routes.js';

const app = express();

// Puerto asignado por Render o 3001 para local
const PORT = process.env.PORT || 3001;

// Configuración de CORS y parseo de JSON
app.use(cors());
app.use(express.json());

// Ruta base para probar la salud de la API directamente en el navegador
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de VetChiloé funcionando correctamente c:' });
});

// Rutas de la aplicación
app.use('/api/pacientes', pacientesRoutes);
app.use('/api/hospitalizaciones', hospitalizacionesRoutes);

// Escuchar en 0.0.0.0 es obligatorio para que Render exponga la app públicamente
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend de VetChiloé corriendo en el puerto ${PORT}`);
});

export default app;