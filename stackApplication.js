
const word = "racecar"

let rword = ''

let letters = []

for(let i=0; i<word.length; i++){
    letters.push(word[i])
}

for(let i=0; i<word.length; i++){
    rword += letters.pop()
}

if(word === rword){
    console.log(`${word} is palidrome`);
}
else{
    console.log(`${word} is palidrome`);
}