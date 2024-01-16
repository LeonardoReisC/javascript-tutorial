"use strict";

/**
 * Promise.all
 * takes an array of promises and resolved when all listed promises
    are resolved.
*/
{
    let names = ["LeonardoReisC", "LeonardoReisC", "LeonardoReisC"];

    let requests = names.map((name) =>
        fetch(`https://api.github.com/users/${name}`)
    );

    Promise.all(requests)
        .then((responses) => {
            for (let response of responses) {
                console.log(`${response.url}: ${response.status}`);
            }
            return responses;
        })
        .then((responses) => Promise.all(responses.map((r) => r.json())))
        .then((users) => users.forEach((user) => console.log(user.name))); // Leonardo Reis Coimbra
}

// if one promise rejects, Promise.all immediately rejects
{
    Promise.all([
        new Promise((resolve, reject) => setTimeout(() => resolve(1)), 1000),
        new Promise(
            (resolve, reject) => setTimeout(() => reject(new Error("Whoops!"))),
            2000
        ),
        new Promise((resolve, reject) => setTimeout(() => resolve(3)), 3000),
    ]).catch((error) => console.log(error.message)); // Whoops!
}

// Promise.allSettled: waits for all promises to settle, regardless of the result
{
    let urls = [
        "https://api.github.com/users/LeonardoReisC",
        "https://no-such-url",
    ];

    Promise.allSettled(urls.map((url) => fetch(url))).then((responses) => {
        responses.forEach((response, index) => {
            if (response.status == "fulfilled") {
                console.log(`${urls[index]}: ${response.value.status}`);
            }
            if (response.status == "rejected") {
                console.log(`${urls[index]}: ${response.reason}`);
            }
        });
    });
}

// Promise.race: waits only for the first settled promise and gets its result
{
    Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve(1)), 1000),
        new Promise(
            (resolve, reject) => setTimeout(() => reject(new Error("Whoops!"))),
            2000
        ),
        new Promise((resolve, reject) => setTimeout(() => resolve(3)), 3000),
    ]).then(console.log); // 1, fastest
}

// Promise.any: waits only for the first fulfilled promise and gets its result.
{
    Promise.any([
        new Promise(
            (resolve, reject) => setTimeout(() => reject(new Error("Whoops!"))),
            1000
        ),
        new Promise((resolve, reject) => setTimeout(() => resolve(2)), 2000),
        new Promise((resolve, reject) => setTimeout(() => resolve(3)), 3000),
    ]).then(console.log); // 2
}

/**
 * if no one is resolved, then returns a rejected promise with AggregateError
   that stores all promise errors
 */
{
    Promise.any([
        new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("Ouch!")), 1000)
        ),
        new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("Whoops!")), 2000)
        ),
    ]).catch((error) => {
        console.log(error.constructor.name); // AggregateError
        console.log(error.errors[0].message); // Ouch!
        console.log(error.errors[1].message); // Whoops!
    });
}
