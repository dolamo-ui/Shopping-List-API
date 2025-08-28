import { Request, Response, NextFunction } from 'express';

interface ApiError extends Error {
  status?: number;
}

export function errorHandler(
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: statusCode,
    },
  });
}
