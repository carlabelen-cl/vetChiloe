import express from 'express';
import cors from 'cors';
import pacientesRoutes from './src/routes/pacientes.routes.js';
import hospitalizacionesRoutes from './src/routes/hospitalizaciones.routes.js';

const app = express();

// asignamos el puerto inyectado por el entorno de render o respaldamos en 3001 para entorno local c:
const puerto_servidor = process.env.PORT || 3001;

// configuracion de cors y parseo de json
app.use(cors());
app.use(express.json());

// ruta base para probar la salud de la api directamente en el navegador
app.get('/', (peticion_cliente, respuesta_servidor) => {
  respuesta_servidor.json({ mensaje: 'API de VetChiloé funcionando correctamente c:' });
});

// rutas principales de la aplicacion
app.use('/api/pacientes', pacientesRoutes);
app.use('/api/hospitalizaciones', hospitalizacionesRoutes);

// escuchar en 0.0.0.0 permite a render detectar e intervenir el puerto asignado correctamente :D
app.listen(puerto_servidor, '0.0.0.0', () => {
  console.log(`Backend de VetChiloé corriendo en el puerto ${puerto_servidor}`);
});

export default app;