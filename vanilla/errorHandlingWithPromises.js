"use strict";

// when a promise rejects, the control jumps to the closest rejection handler
{
    fetch("https://api.github.com/users/LeonardoReisC")
        .then((response) => response.json())
        .then((user) => console.log(user.name)) // Leonardo Reis Coimbra
        // catch all errors
        .catch((error) => console.log(error.message));
}

// Implicit try…catch
{
    new Promise((resolve, reject) => {
        resolve("ok");
    })
        .then((result) => {
            throw new Error("Whoops!");
        })
        .catch((error) => console.log(error.message)); // Whoops!
}

// Rethrowing
{
    new Promise((resolve, reject) => {
        throw new Error("Whoops!");
    })
        .catch((error) => {
            if (error instanceof URIError) {
                // handle
            } else {
                throw error;
            }
        })
        //  continues to .then if URIError is successfully handled
        .then(() => {})
        // rethrows other errors
        .catch((error) => {
            console.log(`Unknown error has occured: ${error.message}`);
        });
}
