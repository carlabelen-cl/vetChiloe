import express from 'express';
import cors from 'cors';
import pacientesRoutes from './src/routes/pacientes.routes.js';
import hospitalizacionesRoutes from './src/routes/hospitalizaciones.routes.js';

const app = express();

// OBLIGATORIO: Puerto asignado por Render o 3001 por defecto en local
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Registro de rutas
app.use('/api/pacientes', pacientesRoutes);
app.use('/api/hospitalizaciones', hospitalizacionesRoutes);

app.listen(PORT, () => {
  console.log(`Backend de VetChiloé corriendo en el puerto ${PORT}`);
});

export default app;