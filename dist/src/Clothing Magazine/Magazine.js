"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        // if not enough capacity throw error
        if (this.clothes.length > this.capacity) {
            throw new Error("Not enough capacity !");
        }
        //else add new cloth
        this.clothes.push(cloth);
    }
    removeCloth(color) {
        // here we try to find an index in the array that matches the color
        const isFoundIndex = this.clothes.findIndex((cloth) => cloth.color === color);
        // if there is a match isFoundIndex won't be -1 so we remove it from the array and return true
        if (isFoundIndex !== -1) {
            this.clothes.splice(isFoundIndex, 1);
            return true;
        }
        // else there is no match so we just return false
        return false;
    }
    getSmallestCloth() {
        // if the array collection is not empty find the smallest cloth size
        if (this.clothes.length > 0) {
            // assume smallest Cloth is the first cloth
            let smallestCloth = this.clothes[0];
            for (let i = 0; i < this.clothes.length; i++) {
                // if current cloth size is smaller than the first cloth size then change the smallest cloth to current cloth
                if (this.clothes[i].size < smallestCloth.size) {
                    smallestCloth = this.clothes[i];
                }
            }
        }
        // if it's empty return undefined
        return undefined;
    }
    getCloth(color) {
        // if it's found it will return the cloth if not it will return undefined
        const isFound = this.clothes.find((cloth) => cloth.color === color);
        return isFound;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        // if collection is not empty
        if (this.clothes.length > 0) {
            const sortedCloths = this.clothes.sort((a, b) => a.size - b.size);
            const clothesList = sortedCloths
                .map((cloth) => cloth.toString())
                .join("\n");
            return `${this.type} magazine contains: \n ${clothesList}`;
        }
        // if it's empty
        return `${this.type} magazine is empty`;
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map