export default class UsernameFormatError extends Error {

  code = 10012;

  constructor() {

    super("Username must be a string of 1 to 30 alphanumeric characters");

  }

}