export default class AccountBannedError extends Error {

  code = 10012;

  constructor() {

    super("You're not old enough to do that");

  }

}