"use strict";

// Async functions: always returns a promise
{
    async function f() {
        return 1; // same as Promise.resolve(1)
    }

    f().then(console.log); // 1
}

// Await: makes JavaScript wait until that promise settles and returns its result
{
    async function getGitHubUser() {
        let response = await fetch(
            "https://api.github.com/users/LeonardoReisC"
        );
        let user = await response.json();

        // wait 3 seconds
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));

        return user;
    }

    getGitHubUser().then(console.log);
}

// Error handling
{
    async function f() {
        try {
            let response = await fetch("https://no-such-user");
        } catch (error) {
            console.log(error.message); // fetch failed
        }
    }
    f();
}

// if there's no try...catch, then async function f() promise becomes rejected
{
    async function f() {
        let response = await fetch("https://no-such-user");
    }
    f().catch((error) => console.log(error.message)); // fetch failed
}
