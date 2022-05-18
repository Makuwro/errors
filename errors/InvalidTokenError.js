export default class InvalidTokenError extends Error {

  code = 10001;

  constructor() {

    super("Invalid token.");

  }

}