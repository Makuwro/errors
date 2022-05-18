export default class EmailFormatError extends Error {

  code = 10007;

  constructor() {

    super("Email must be a valid email address with 254 or less characters");

  }

}