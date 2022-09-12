const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length;
    },
    addLink(value) {
        if (arguments[0] === undefined) {
            this.arr.push("()");
        } else {
            this.arr.push(`( ${value} )`);
        }
        return this;
    },
    removeLink(position) {
        if (this.arr.length < position || position <= 0 || !Number.isInteger(position) || isNaN(position) || typeof position !== "number") {
            let result = this.arr;
            this.arr = [];
            throw new Error(`You can't remove incorrect link!`);
        } else {
            this.arr.splice(position - 1, 1);
        }
        return this;
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        let result = this.arr;
        this.arr = [];
        return result.join("~~");
    },
};
module.exports = {
    chainMaker,
};
