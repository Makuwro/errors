export default class UnallowedFieldError extends Error {

  code = 30000;
  
  constructor(field) {

    super(`You cannot change ${field}`);

  }

}