export default class AccountBannedError extends Error {

  code = 10002;

  constructor() {

    super("This account has been banned by Makuwro");

  }

}