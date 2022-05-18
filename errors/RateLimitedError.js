export default class RateLimitedError extends Error {

  code = 10010;

  constructor() {

    super("This account is currently rate limited");

  }

}