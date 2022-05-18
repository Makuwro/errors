export default class ContentConflictError extends Error {

  code = 20000;

  constructor(type = "content") {

    super(`You already uploaded ${type} with that slug`);

  }

}