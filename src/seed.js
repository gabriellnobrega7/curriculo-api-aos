import db from './models/index.js';

const { User, AcademicExperience, ProfessionalExperience, Project } = db;

async function populateDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');

    // Sincroniza as tabelas sem apagar dados se já existirem, ou força a criação
    await db.sequelize.sync({ force: true });
    console.log('Tabelas recriadas e limpas para o seed...');

    // --- PESSOA 1: Gabriel ---
    const user1 = await User.create({
      name: 'Gabriel Soares',
      title: 'Desenvolvedor Full Stack & Mobile',
      bio: 'Estudante de Sistemas para Internet na UNICAP, focado em desenvolvimento web e mobile com React Native, Node.js e PostgreSQL.',
      email: 'gabriellnobrega21@gmail.com',
      phone: '(81) 99999-9999'
    });

    await AcademicExperience.create({
      UserId: user1.id,
      institution: 'UNICAP - Universidade Católica de Pernambuco',
      course: 'Sistemas para Internet',
      startDate: '2025-02-01',
      endDate: '2027-07-01'
    });

    await ProfessionalExperience.create({
      UserId: user1.id,
      company: 'Camed MicroCredito',
      role: 'Jovem aprendiz',
      description: 'Elaboração de planilhas, atendimento ao cliente, suporte ao usuário,etc.',
      startDate: '2026-01-01',
      endDate: null
    });

    await Project.create({
  UserId: user1.id,
  title: 'Currículo API',
  description: 'API RESTful desenvolvida com Node.js, Express, Sequelize e NeonDB.',
  link: 'https://github.com/gabriellnobrega7/curriculo-api'
});

    // --- PESSOA 2: Maria ---
    const user2 = await User.create({
      name: 'Maria Silva',
      title: 'Desenvolvedora Frontend & Designer UI/UX',
      bio: 'Especialista em interfaces intuitivas e responsivas utilizando React, Tailwind CSS e Figma.',
      email: 'maria.silva@email.com',
      phone: '(81) 98888-8888'
    });

    await AcademicExperience.create({
      UserId: user2.id,
      institution: 'UFPE - Universidade Federal de Pernambuco',
      course: 'Sistemas de Informação',
      startDate: '2024-02-01',
      endDate: '2027-12-01'
    });

    await ProfessionalExperience.create({
      UserId: user2.id,
      company: 'Studio Design & Code',
      role: 'UI/UX Designer & Web Developer',
      description: 'Criação de protótipos de alta fidelidade e implementação de layouts em React.',
      startDate: '2025-06-01',
      endDate: null
    });

    await Project.create({
      UserId: user2.id,
      title: 'Design System & Portfolio',
      description: 'Sistema de componentes reutilizáveis para aplicações web.',
      link: 'https://github.com/maria/design-system'
    });

    console.log('✅ Dados inseridos com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro crítico no seed:', error);
    process.exit(1);
  }
}

populateDatabase();