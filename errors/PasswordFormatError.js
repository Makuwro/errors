export default class PasswordFormatError extends Error {

  code = 10009;

  constructor() {

    super("Password must a string between 1 to 256 characters");

  }

}