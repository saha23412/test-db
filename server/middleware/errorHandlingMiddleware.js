import { ApiError } from '../error/apiError.js';
export function errorMiddleware(err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Непредвиденная ошибка' });
}
