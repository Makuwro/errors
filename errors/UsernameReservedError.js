export default class UsernameReservedError extends Error {

  code = 10013;

  constructor() {

    super("That username has been reserved by the Makuwro Safety and Security Team");

  }

}