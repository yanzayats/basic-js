const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    // throw new NotImplementedError('Not implemented');
    if (typeof sampleActivity === "string") {
        if (!isNaN(+sampleActivity) && +sampleActivity <= 15 && +sampleActivity > 0) {
            return showResult(+sampleActivity);
        } else {
            return false;
        }
    } else {
        return false;
    }

    function showResult(number) {
        let result = Math.ceil(-(Math.log(number / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD)));
        return result;
    }
    // if (typeof +sampleActivity === "number") {
    //     let result = Math.log(sampleActivity / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD);
    //     return Math.ceil(result);
    // } else {
    //     return false;
    // }
}

module.exports = {
    dateSample,
};
