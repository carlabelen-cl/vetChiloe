import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// cargamos variables de entorno pero aseguramos que el puerto de render tenga prioridad c:
dotenv.config();

import pacientesRoutes from './src/routes/pacientes.routes.js';
import hospitalizacionesRoutes from './src/routes/hospitalizaciones.routes.js';

const app = express();

// si estamos en render (RENDER_SERVICE_ID existe) usamos process.env.PORT asignado dinamicamente
// si estamos en local, usamos PORT o 3001
const puerto_servidor = process.env.RENDER_SERVICE_ID 
  ? process.env.PORT 
  : (process.env.PORT || 3001);

// configuracion de cors y parseo de json
app.use(cors());
app.use(express.json());

// ruta base de prueba
app.get('/', (peticion_cliente, respuesta_servidor) => {
  respuesta_servidor.json({ mensaje: 'API de VetChiloé funcionando correctamente c:' });
});

// rutas de la aplicacion
app.use('/api/pacientes', pacientesRoutes);
app.use('/api/hospitalizaciones', hospitalizacionesRoutes);

// escuchamos en 0.0.0.0 y el puerto corregido :D
app.listen(puerto_servidor, '0.0.0.0', () => {
  console.log(`Backend de VetChiloé corriendo en el puerto ${puerto_servidor}`);
});

export default app;