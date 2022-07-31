//Input string and table size, return hash
function hashStringToInt(string, tableSize) {
    let hash = 17;

    for (let i = 0; i < string.length; i++) {
        hash = (13 *  hash * string.charCodeAt(i)) % tableSize
    }

    return hash;
}

class HashTable {

    table = new Array(3);
    numItems = 0;

    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newTable.length);
                    if (newTable[idx]) {
                        newTable[idx].push([key, value]);
                    } else {
                        newTable[idx] = [[key, value]];
                    }
                });
            }
        });
        this.table = newTable;
    };

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length);
        this.numItems++;

        const loadFactor = this.numItems / this.table.length;

        if (loadFactor > .8) {
            //Resize
            console.log("Resize happening");
            this.resize();


        }

        /*If a key/value pair already exists at a specific hash, 
        append new key/value pair to end of array at that hash.
        */
        if (this.table[idx]) {
            this.table[idx].push([key, value]);
        } else {
            this.table[idx] = [[key, value]];
        }

    };

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length);

        if (!this.table[idx]) {
            return null;
        }

        return this.table[idx].find(x => x[0] === key);
    };
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
console.log(myTable.table);
myTable.setItem("lastName", "Tim");
console.log(myTable.table);
myTable.setItem("age", 5);
console.log(myTable.table);
myTable.setItem("dob", "1/2/3");
console.log(myTable.table);


console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("dob"));