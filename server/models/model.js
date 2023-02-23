import { dataBase } from '../db.js';
import { DataTypes } from 'sequelize';
export const User = dataBase.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  dateOfVisit: { type: DataTypes.DATEONLY, allowNull: false },
  monies: { type: DataTypes.DECIMAL, defaultValue: 0 },
});

export const WalletUser = dataBase.define('wallet_user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tariff: { type: DataTypes.STRING, defaultValue: 'Базовый', allowNull: false },
  lastMoneyTransfer: { type: DataTypes.DATEONLY, allowNull: false },
  sumOfAllTransfers: { type: DataTypes.DECIMAL, defaultValue: 0 },
});

User.hasOne(WalletUser);
WalletUser.belongsTo(User);
