import { WalletUser } from '../models/model.js';
import { ApiError } from '../error/apiError.js';

class WalletController {
  async getById(req, res, next) {
    try {
      const wallet = await WalletUser.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!wallet) return next(ApiError.badRequest('Кошелька нет'));
      return res.json(wallet);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
}

const walletController = new WalletController();

export { walletController };
