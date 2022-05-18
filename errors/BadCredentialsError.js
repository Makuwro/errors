export default class BadCredentialsError extends Error {

  code = 10000;

  constructor() {

    super("The username and password combination is incorrect");

  }

}