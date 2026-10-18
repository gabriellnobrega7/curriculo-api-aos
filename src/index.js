import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './models/index.js';
import curriculumRoutes from './routes/curriculumRoutes.js'; // <-- Adicione esta linha

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Registrar as rotas da API
app.use('/api', curriculumRoutes); // <-- Adicione esta linha

app.get('/', (req, res) => {
  res.json({ message: 'API de Currículo rodando com sucesso!' });
});

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ alter: true }).then(() => {
  console.log('Banco de dados conectado e sincronizado com sucesso!');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Erro ao conectar com o banco de dados:', err);
});