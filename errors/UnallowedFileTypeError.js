export default class UnallowedFileTypeError extends Error {

  code = 30001;

  constructor() {

    super("That file type isn't allowed");

  }

}