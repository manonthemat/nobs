'use strict';

const mutate = (obj) => {

    if (Array.isArray(obj)) {
        return obj; // not touching arrays
    }

    const ordered = {};

    // iterate over object keys
    Object.keys(obj).sort().forEach((key) => {

        if (typeof obj[key] === 'object') {
            ordered[key] = mutate(obj[key]);
        }
        else {
            ordered[key] = obj[key];
        }
    });
    return ordered;
};

module.exports = (obj) => {

    return JSON.stringify(mutate(obj));
};
