let person = '홍길동';
let age = 25;

function myTag(strings, personName, personAge) {
    let str = strings[1];
    let ageStr;

    personAge > 50 ? ageStr = "grandpa" : ageStr = "youngster";
    return personName + str + ageStr;
}

let sentence = myTag`That ${person} is a ${age}`;
console.log(sentence);