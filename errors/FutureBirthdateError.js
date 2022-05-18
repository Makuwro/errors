export default class FutureBirthdateError extends Error {

  code = 10008;

  constructor() {

    super("Are you a time traveller?");

  }

}