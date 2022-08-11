import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from './request-validation-error';

export const validateRequest = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  console.log('test');
  const errors = validationResult(req);

  console.log("errors", errors)

  console.log({ errors });

  if (!errors.isEmpty()) throw new RequestValidationError(errors.array());

  next();
};
