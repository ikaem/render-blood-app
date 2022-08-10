import { body, param } from 'express-validator';
import { validateRequest } from '../../../../../lib/express-validator/validate-request';

export const validateSubscribeRequest = () => {
  const validator = [
    body('email').isEmail().withMessage('Email must be valid'),
    body('bloodGroup').withMessage('Blood group is required'),
    body('city').withMessage('City is required'),
  ];

  return [validator, validateRequest];
};
