export default class DisplayNameFormatError extends Error {

  code = 10006;

  constructor() {

    super("Display name must be a string with 1-50 characters");

  }

}