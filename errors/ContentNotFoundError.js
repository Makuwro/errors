export default class ContentNotFoundError extends Error {

  code = 20001;

  constructor() {

    super("That content doesn't exist");

  }

}