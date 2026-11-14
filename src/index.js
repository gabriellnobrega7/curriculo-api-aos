
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import curriculumRoutes from './routes/curriculumRoutes.js';
import tarefaRoutes from './routes/tarefa.js';
import db from './models/index.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const databaseReady = db.sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco estabelecida.');
    return db.sequelize.sync();
  })
  .then(() => {
    console.log('Modelos sincronizados com sucesso.');
  });

app.use(async (req, res, next) => {
  try {
    await databaseReady;
    next();
  } catch (error) {
    console.error('Erro na conexão com o banco:', error);
    res.status(500).json({ erro: 'Erro ao conectar com o banco de dados.' });
  }
});

app.use('/api', curriculumRoutes);
app.use('/tarefas', tarefaRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API de Currículo rodando com sucesso!' });
});

if (!process.env.VERCEL) {
  databaseReady
    .then(() => {
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
      });
    })
    .catch((error) => {
      console.error('Erro ao iniciar a API:', error);
    });
}

export default app;
