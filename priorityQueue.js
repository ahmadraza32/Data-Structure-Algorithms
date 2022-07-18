
function PriorityQueue(){
    let collection = []
    this.print = function(){
        return collection
    }
    this.isEmpty = function(){
        return (collection.length === 0)
    }

    this.dequeue = function(){
        return collection.shift()
    }

    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element)
        }
        else{
            let added = false
            for(let i=0; i<collection.length; i++){
                if(element[1] < collection[i][1]){
                    collection.splice(i, 0, element)
                    added = true
                    break
                }
            }

            if(!added){
                collection.push(element)
            }
        }
    }
}

let pQueue = new PriorityQueue()
pQueue.enqueue(['running', 4])
pQueue.enqueue(['eating', 2])
pQueue.enqueue(['coding', 3])
pQueue.enqueue(['learning', 3])

pQueue.dequeue()
console.log(pQueue.print());