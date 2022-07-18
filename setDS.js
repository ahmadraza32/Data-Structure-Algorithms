
function MySet(){
    let collection = []

    this.has = function(element){
        return (collection.indexOf(element) !== -1)
    }

    this.values = function(){
        return collection
    }

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element)
            return true
        }

        return false
        // element has not been added to Set, set already has it
    }

    this.remove = function(element){
        if(this.has(element)){
            let index = collection.indexOf(element)
            // removing element
            collection.splice(index, 1)
            return true 
        }

        return false
    }

    this.size = function(){
        return collection.length
    }

    this.union = function(otherSet){
     let unionSet = new MySet()
     let firstSet = this.values()   
     let secondSet = otherSet.values()

     firstSet.forEach(el => {
        unionSet.add(el)
     })

     secondSet.forEach(el => {
        unionSet.add(el)
     })

     return unionSet
    }

    this.intersection = function(otherSet){
        let intersectionSet = new MySet()
        let firstSet = this.values()   
        let secondSet = otherSet.values()

        firstSet.forEach(el => {
            if(otherSet.has(el)){
                intersectionSet.add(el)
            }
        })

        return intersectionSet
    }

    this.difference = function(otherSet){
        let differenceSet = new MySet()
        let firstSet = this.values()   
        
        firstSet.forEach(el => {
            if(!otherSet.has(el)){
                differenceSet.add(el)
            }
        })

        return differenceSet
    }

    this.subSet = function(otherSet){
     let firstSet = this.values()   
     
     return firstSet.every(function(value){
        return otherSet.has(value)
     })
    }
}

let setA = new MySet()
setA.add('1')
setA.add('2')
setA.add('3')
setA.add('4')
// setA.remove('1')
console.log(setA.values());
console.log(setA.size());

let setB = new MySet()
setB.add('4')
setB.add('5')
setB.add('5') // this.has method will remove duplication
setB.add('6')
console.log(setB.values());
console.log(setB.size());

console.log(setA.union(setB).values())
console.log(setA.intersection(setB).values())
console.log(setA.difference(setB).values())
console.log(setA.subSet(setB))
