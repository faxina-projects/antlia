import validator from 'validator';

class StringValidator {
  isEmail = (email: string) => {
    return validator.isEmail(email);
  };
}

const stringValidator = new StringValidator();

export { stringValidator };
