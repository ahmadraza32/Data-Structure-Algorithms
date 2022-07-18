
let hash = (string, max) => {
    let hash = 0
    for(let i=0; i<string.length; i++){
        hash += string.charCodeAt(i)
    }
    return hash % max
}

let HashTable = function(){

    let storage = []
    const storagelimit = 4

    this.print = function(){ return storage }

    this.add = function(key, value){
        let index = hash(key, storagelimit)
        if(storage[index] === undefined){
            storage[index] = [
                [key, value]
            ]
        }
        else{
            let inserted = false
            for(let i=0; i<storage[index].length; i++){
                if(storage[index][i][0] === key){
                    storage[index][i][1] = value
                    inserted = true
                }
            }

            if(inserted === false){
                storage[index].push([key, value])
            }
        }
    }

    this.remove = function(key){
        let index = hash(key, storagelimit)
        if(storage[index].length === 1 && storage[index][0][0] == key){
            delete storage[index]
        }
        else{
            for(let i=0; i<storage[index].length; i++){
                if(storage[index][i][0] === key){
                    delete storage[index][i]
                }
            }
        }
    }

    this.lookup = function(key){
        let index = hash(key, storagelimit)
        if(storage[index] === undefined){
            return undefined
        }
        else{
            for(let i=0; i<storage[index].length; i++){
                if(storage[index][i][0] === key){
                    return storage[index][i][1]
                }
            }
        }
    }
}

console.log(hash('bea', 10));
console.log(hash('bea', 10));
console.log(hash('bea', 10));

let ht = new HashTable()
ht.add('Ahmad', 'person')
ht.add('Tomi', 'dog')
console.log(ht.lookup('Tomi'));
console.log(ht.lookup('Ahmad'));
console.log(ht.print());