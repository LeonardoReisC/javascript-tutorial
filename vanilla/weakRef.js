"use strict";

/**
 * WeakRef
 * it does not prevent the garbage collector from deleting its referent-object.
 */
{
    let user = { name: "Leonardo" }; // strong reference
    let admin = new WeakRef(user); // weak reference

    user = null;

    let ref = admin.deref(); // returns the referent-object
    if (ref) {
        console.log("Not collected");
    } else {
        console.log("Collected");
    }
}

// Example: caching
{
    function fetchImg() {}

    function weakRefCache(fetchImg) {
        const imgCache = new Map();

        return (imgName) => {
            const cachedImg = imgCache.get(imgName);

            if (cachedImg?.defer()) {
                return cachedImg?.defer();
            }

            const newImg = fetchImg(imgName);
            cachedImg.set(imgName, new WeakRef(newImg));

            return newImg;
        };
    }

    const getCachedImg = weakRefCache(fetchImg);
}

/**
 * FinalizationRegistry
 * provides the ability to perform additional operations, related to the object, 
   after it has been finally deleted from memory.
 */
{
    let user = { name: "Leonardo" };

    // manages the registration and unregistration of objects and their cleanup callbacks
    const registry = new FinalizationRegistry((heldValue) => {
        console.log(`${heldValue} has been deleted by the garbage collector.`);
    });

    // register(target, heldValue [, unregisterToken])
    registry.register(user, user.name);

    user = null;
}

// Example: caching
{
    function fetchImg() {}

    function weakRefCache(fetchImg) {
        const imgCache = new Map();

        const registry = new FinalizationRegistry((imgName) => {
            const cachedImg = imgCache.get(imgName);
            if (cachedImg && !cachedImg.deref()) imgCache.delete(imgName);
        });

        return (imgName) => {
            const cachedImg = imgCache.get(imgName);

            if (cachedImg?.defer()) {
                return cachedImg?.defer();
            }

            const newImg = fetchImg(imgName);
            cachedImg.set(imgName, new WeakRef(newImg));
            registry.register(newImg, imgName);

            return newImg;
        };
    }

    const getCachedImg = weakRefCache(fetchImg);
}
