export default class RequiredVariableError extends Error {

  code = 30002;

  constructor(variable) {

    super(`No ${variable} provided`);

  }

}