import { Sequelize } from 'sequelize';

const dataBase = new Sequelize(
  'wallet', // Название БД
  'postgres', //Пользователь
  'root', //Пароль
  {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
  }
);

export { dataBase };
