export default class AccountBlockedError extends Error {

  code = 10003;

  constructor() {

    super("This account has been blocked by the target account");

  }

}