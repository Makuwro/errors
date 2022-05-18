
# `0` Unknown error

| Code | Class name     | Message                 | How to solve the problem                                     |
| ---- | -------------- | ----------------------- | ------------------------------------------------------------ |
| `0`  | `UnknownError` | `Internal server error` | Try requesting again. If it doesn't work, send us a message! |

# `1xxxx` Account errors

| Code    | Class name               | Message                                                                 | How to solve the problem                                             |
| ------- | ------------------------ | ----------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `10000` | `BadCredentialsError`    | `The username and password combination is incorrect`                    | Check the username and password, then try again.<br><br> ⚠️ **Be careful:** too many attempts might get your IP address blacklisted. |
| `10001` | `InvalidTokenError`      | `Invalid token`                                                         | Check your token, then try requesting again.                         |
| `10002` | `AccountBannedError`     | `This account has been banned by the Makuwro Safety & Security Team`    | Due to policy violations, you probably can't solve this by yourself.<br><br>Check how much time left is on your ban, and wait it out if it's temporary. You may also contact us if you believe the Safety & Security Team wrongly banned your account. |
| `10003` | `AccountBlockedError`    | `This account has been blocked by the target account`                   | The account owner must unblock you for you to interact with them.    |
| `10004` | `AccountConflictError`   | `That account already exists`                                           | Choose an available username, then try again.                        |
| `10005` | `AccountNotFoundError`   | `That account doesn't exist`                                            | Check the username, then try again.                                  |
| `10006` | `DisplayNameFormatError` | `Display name must be a string between 1 to 50 characters`              | Check the amount of characters in your display name to make sure that it's between 1 to 50 characters. Then, try again. |
| `10007` | `EmailFormatError`       | `Email must be a valid email address with 254 or less characters`       | Make sure your email address follows the `<name>@<domain>.<extension>` format. Also, ensure that the email address is under 254 characters. Then, try again. |
| `10008` | `FutureBirthdateError`   | `Are you a time traveller?`                                             | Check the birthdate, then try again.                                 |
| `10009` | `PasswordFormatError`    | `Password must a string between 1 to 256 characters`                    | Check the amount of characters in your password to make sure it's between 1 to 256 characters, then try again. |
| `10010` | `RateLimitedError`       | `This account is currently rate limited`                                | Make a request to check when your request pool replenishes, then try again when it does. |
| `10011` | `SelfActionError`        | `You can't do that to yourself`                                         | Choose another account, then try again.                              |
| `10012` | `UnderageError`          | `You're not old enough to do that`                                      | Wait until you're old enough to do your request, and then try again. |
| `10012` | `UsernameFormatError`    | `Username must be a string of 1 to 30 alphanumeric characters`          | Remove any special characters from your username, and keep the length between 1 to 30 characters, and then try again. |
| `10013` | `UsernameReservedError`  | `That username has been reserved by the Makuwro Safety & Security Team` | Choose an available username, then try again. |

# `2xxxx` Content errors

| Code    | Class name             | Message                                   | How to solve the problem                                                                                                          |
| ------- | ---------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `20000` | `ContentConflictError` | `You already uploaded {x} with that slug` | Choose another slug, rename the piece of content that uses that slug, or delete the content that uses that slug. Then, try again. |
| `20001` | `ContentNotFoundError` | `That content doesn't exist`              | Check the slug, then try again.                                                                                                   |

# `3xxxx` General request errors

| Code    | Class name               | Message                        | How to solve the problem                                       |
| ------- | ------------------------ | ------------------------------ | -------------------------------------------------------------- |
| `30000` | `UnallowedFieldError`    | `You cannot change {x}`        | Remove the `{x}` field from your request body, then try again. |
| `30001` | `UnallowedFileTypeError` | `That file type isn't allowed` | Check your file types, then try again.                         |
| `30002` | `RequiredVariableError`  | `No {x} provided`              | Add a `{x}` field to your request body, then try again.        |