const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    // throw new NotImplementedError('Not implemented');

    let arrSeason = ["winter", "spring", "summer", "autumn"];

    // try {
    //     date.getFullYear();
    // } catch (e) {
    //     throw new Error("Invalid date");
    // }
    if (!date) {
        return "Unable to determine the time of year!";
    }

    if (!(date instanceof Date) || date.hasOwnProperty("toString")) {
        throw new Error("Invalid date!");
    }

    let month = date.getMonth();

    if (month == 11 || month == 0 || month == 1) {
        return arrSeason[0];
    } else if (month == 2 || month == 3 || month == 4) {
        return arrSeason[1];
    } else if (month == 5 || month == 6 || month == 7) {
        return arrSeason[2];
    } else if (month == 8 || month == 9 || month == 10) {
        return arrSeason[3];
    } else {
        throw new Error("Invalid date!");
    }
}

module.exports = {
    getSeason,
};
