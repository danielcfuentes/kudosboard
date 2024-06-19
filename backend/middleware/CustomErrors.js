// For example, use 404 for not found errors, 400 for validation errors, and 401 for unauthorized errors. This makes it easier to send appropriate HTTP responses when an error is caught.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}
module.exports = { ValidationError };
