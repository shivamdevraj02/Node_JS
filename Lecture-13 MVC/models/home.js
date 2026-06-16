const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { error } = require('console');

let registeredHomes = [];




module.exports = class Home {

    constructor(houseName, price, location, rating, photoUrl) {

        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save() {

        this.fetchAll((registeredHomes) => {

            registeredHomes.push(this);

            const filePath = path.join(rootDir, 'data', 'homes.json');

            fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
                console.log("consoling error", err);
            })



        })

    }

    static fetchAll(callback) {

        const filePath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(filePath, (err, data) => {
            let homes = [];
            if (!err) {
                homes = JSON.parse(data);
            }
            else {
                callback(homes);
            }
        })



    }

}

