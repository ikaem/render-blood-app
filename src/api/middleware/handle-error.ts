import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../../models/errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  // TODO here we should use some logging solution
  console.error('Somethig went wrong:', err);

  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ errors: err.serializeErrors() });
    return;
  }

  res.status(400).json({
    errors: [
      {
        message: 'Something went wrong',
      },
    ],
  });
};
