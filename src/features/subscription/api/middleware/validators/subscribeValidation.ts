import { body, param, ValidationChain } from 'express-validator';
import { validateRequest } from '../../../../../lib/express-validator/validate-request';

export const subscribeValidation = [
  body('email').isEmail().notEmpty().withMessage('Email must be valid'),
  body('bloodGroup').notEmpty().withMessage('Blood group is required'),
  body('city').notEmpty().withMessage('City is required'),
  validateRequest,
];
