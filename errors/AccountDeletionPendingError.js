export default class AccountDeletionPendingError extends Error {

  code = 10008;

  constructor() {

    super("This account is already scheduled for deletion");

  }

}