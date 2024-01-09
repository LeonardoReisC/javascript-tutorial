// Extending Error
{
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError";
        }
    }

    function readuser(json) {
        let user = JSON.parse(json);

        if (!user.age) {
            throw new ValidationError("No field: age");
        }
        if (!user.name) {
            throw new ValidationError("No field: name");
        }

        return user;
    }

    try {
        let user = readuser('{ "age": 20 }');
    } catch (err) {
        if (err instanceof ValidationError) {
            console.log(err.message); // No field: name
        } else if (err instanceof SyntaxError) {
            console.log(`JSON Syntax Error: ${err.message}`);
        } else {
            throw err;
        }
    }
}

// Further inheritance
{
    class MyError extends Error {
        constructor(message) {
            super(message);
            this.name = this.constructor.name; // simplifies
        }
    }

    class ValidationError extends MyError {}

    class PropertyRequiredError extends ValidationError {
        constructor(property) {
            super(`No property: ${property}`);
            this.property = property;
        }
    }

    function readuser(json) {
        let user = JSON.parse(json);

        if (!user.age) {
            throw new PropertyRequiredError("age");
        }

        if (!user.name) {
            throw new PropertyRequiredError("name");
        }

        return user;
    }

    try {
        let user = readuser('{ "age": 20 }');
    } catch (err) {
        if (err instanceof PropertyRequiredError) {
            console.log(err.name); // PropertyRequiredError
            console.log(err.message); // No property: name
            console.log(`Property '${err.property}' is missing`);
        } else if (err instanceof ValidationError) {
            console.log(err.message);
        } else if (err instanceof SyntaxError) {
            console.log(`JSON Syntax Error: ${err.message}`);
        } else {
            throw err;
        }
    }
}

// Wrapping exceptions: handles low-level exceptions and creates higher-level errors
{
    class ReadError extends Error {
        constructor(message, cause) {
            super(message);
            this.cause = cause;
            this.name = "ReadError";
        }
    }

    class ValidationError extends Error {}
    class PropertyRequiredError extends ValidationError {}

    function validateUser(user) {
        if (!user.age) {
            throw new PropertyRequiredError("age");
        }

        if (!user.name) {
            throw new PropertyRequiredError("name");
        }
    }

    function readUser(json) {
        let user;

        try {
            user = JSON.parse(json);
        } catch (err) {
            if (err instanceof SyntaxError) {
                throw new ReadError("Syntax Error", err);
            } else {
                throw err;
            }
        }

        try {
            validateUser(user);
        } catch (err) {
            if (err instanceof ValidationError) {
                throw new ReadError("Validation Error", err);
            } else {
                throw err;
            }
        }
    }

    try {
        readUser("{ bad json }");
    } catch (e) {
        if (e instanceof ReadError) {
            console.log(e);
            console.log(`Original Error: ${e.cause}`);
        } else {
            throw e;
        }
    }
}
