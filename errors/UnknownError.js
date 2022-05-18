export default class UnknownError extends Error {

  code = 0;

  constructor() {

    super("Internal server error");

  }

}