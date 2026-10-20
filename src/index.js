import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import curriculumRoutes from './routes/curriculumRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', curriculumRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API de Currículo rodando com sucesso!' });
});

// Local: sobe o servidor. No Vercel: ele mesmo cuida disso.
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

export default app;