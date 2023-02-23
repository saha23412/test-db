import { ApiError } from './../error/apiError.js';
import { User, WalletUser } from '../models/model.js';
import { EmailRegExp } from './validation/validation.js';

class UserController {
  async getAll(req, res, next) {
    const users = await User.findAll();
    if (!users)
      return next(
        ApiError.internal('Ошибка на сервере,пользователи не найдены')
      );
    return res.json(users);
  }

  async getById(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!user) return next(ApiError.badRequest('Пользователя нет'));
      return res.json(user);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async update(req, res, next) {
    const monies = req.body.monies;
    if (/[a-zA-Z]|[а-яА-Я]/.test(monies)) {
      return next(ApiError.badRequest('Неверный формат'));
    }
    await User.update(
      {
        monies,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!user) return next(ApiError.badRequest('Пользователя нет'));
    return res.json(user);
  }
  async create(req, res, next) {
    const { email } = req.body;
    const dateOfVisit = new Date();
    dateOfVisit.toISOString().split('T')[0];
    if (!EmailRegExp.test(email))
      return next(ApiError.badRequest('Неверный email'));
    const user = await User.create({ email, dateOfVisit });
    await WalletUser.create({
      lastMoneyTransfer: dateOfVisit,
      userId: user.id,
    });
    return res.json(user);
  }

  async delete(req, res, next) {
    const id = req.params.id;
    if (!req.params.id) {
      return next(ApiError.badRequest('Введите id'));
    }
    await WalletUser.destroy({
      where: {
        userId: id,
      },
    });
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ message: 'Пользователь удален' });
  }
}

const userController = new UserController();

export { userController };
