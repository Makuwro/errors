export default class AccountConflictError extends Error {

  code = 10004;

  constructor() {

    super("That account already exists");

  }

}