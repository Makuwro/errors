export default class AccountNotFoundError extends Error {

  code = 10005;

  constructor() {

    super("That account doesn't exist");

  }

}