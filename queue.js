

function Queue(){
    let collection = []
    this.print = function(){
        return collection
    }

    this.front = function(){
        return collection[0]
    }

    this.size = function(){
        return collection.length
    }

    this.isEmpty = function(){
        return (collection.length === 0)
    }

    this.enqueue = function(element){
        return collection.push(element)
    }

    this.dequeue = function(){
        // shift method will remove first item from the array and return us
        return collection.shift()
    }
}

let q = new Queue()
q.enqueue('Hi');
q.enqueue('Ahmad');
q.enqueue('Programming is fun');
q.enqueue('1');

console.log(q.print());

q.dequeue()
console.log(q.print());
console.log(q.size());
console.log(q.isEmpty());
console.log(q.front());