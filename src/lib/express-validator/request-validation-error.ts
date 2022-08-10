import { ValidationError } from 'express-validator';
import { CustomError } from '../../models/errors/custom-error';

// TODO not really sure if this should stay in errors or here in this lib
export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Request failidation failed');

    // this is because we are extending a built in class, and we want this error to be recognized later as an instance of custom error

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    const formattedErrors = this.errors.map((e) => ({
      message: e.msg,
      field: e.param,
    }));

    return formattedErrors;
  }
}
