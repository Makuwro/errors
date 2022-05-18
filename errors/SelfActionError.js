export default class SelfActionError extends Error {

  code = 10011;

  constructor() {

    super("You can't do that to yourself");

  }

}