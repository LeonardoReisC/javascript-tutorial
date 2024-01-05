"use strict";

// JSON.stringify: converts a object into JSON
let student = {
    name: "Leonardo",
    age: 20,
    isAdmin: false,
    courses: ["python", "js", "c++"],
    spouse: null,
    sayHI() {
        // ignored
        console.log("Hi!");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined, // ignored
};

let json = JSON.stringify(student);
console.log(json); // {"name":"Leonardo","age":20,"isAdmin":false,"courses":["python","js","c++"],"spouse":null}

// Excluding and transforming: replacer
let room = {
    number: 23,
};

let meetup = {
    title: "Conference",
    participants: [{ name: "Leonardo" }, { name: "Fernando" }],
    place: room,
};

room.occupiedBy = meetup; // circular import, not supported in JSON.stringify

console.log(
    // solution 1: array of encoded properties as a replacer
    JSON.stringify(meetup, ["title", "participants", "name", "place", "number"])
); // {"title":"Conference","participants":[{"name":"Leonardo"},{"name":"Fernando"}],"place":{"number":23}}

console.log(
    // solution 2: function as a replacer
    JSON.stringify(meetup, function replacer(key, value) {
        return key == "occupiedBy" ? undefined : value; // return undefined to exclude
    })
); // {"title":"Conference","participants":[{"name":"Leonardo"},{"name":"Fernando"}],"place":{"number":23}}

// Formatting: spaces
console.log(JSON.stringify(student, null, 4));
/* four-space indents:
{
    "name": "Leonardo",
    "age": 20,
    "isAdmin": false,
    "courses": [
        "python",
        "js",
        "c++"
    ],
    "spouse": null
}
*/

// toJSON: called when having a to-JSON conversion
room = {
    number: 23,
    toJSON() {
        return this.number;
    },
};

console.log(JSON.stringify(room)); // 23

// JSON.parse: decodes a JSON string
let userData =
    '{"name":"Leonardo","age":20,"isAdmin":false,"courses":["python","js","c++"],"spouse":null}';
let user = JSON.parse(userData);
console.log(user);

// Using reviver: deserializes to the specified type
let str = '{"title":"Conference","date":"2024-01-05T00:01:00.000-03:00"}';

meetup = JSON.parse(str, function (key, value) {
    if (key == "date") return new Date(value);
    return value;
});
console.log(meetup); // { title: 'Conference', date: 2024-01-05T03:01:00.000Z }
