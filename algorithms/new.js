function gcd (int1, int2) {
    while(int2 < int1){
        var x = int2
        int2 = int1 % int2 
        int1 = x
    }
    return x
}
console.log(gcd(95, 35))

function grading (grade) {
    if (grade <= 100 && grade >= 90){
        return 'Grade is A'
    }
    if (grade <= 89 && grade >= 80){
        return 'Grade is B'
    }
    if (grade <= 79 && grade >= 70){
        return 'Grade is C'
    }
    if (grade <= 69 && grade >= 60){
        return 'Grade is D'
    }
    if (grade >= 59){
        return 'Grade is F '
    }
}
console.log(grading(88))

function leapyear (year) {
    if (year % 100 === 0 && year % 400 === 0){
        return true
    }if (year % 4 === 0 && year % 100 != 0){
        return true 
    }else {
        return false
    }

}
console.log(leapyear(2016))
console.log(leapyear(1754))
console.log(leapyear(2100))

function pig (word){
    const vowels = ["o", "e", "i", "u", "a"]
    var str = ""
    let wordArr = word.toLowerCase().split("")
    let i = 0
    if (vowels.indexOf(word[0]) !== -1){
        str = word + "way"
        return str
    
    } for (let i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1 ){
            let newArr = wordArr.slice(i) 
            for (let x = 0; x < i; x++){
                newArr.push(wordArr[x])}
        return newArr.join("").toString() + "ay"
        }
    }

}
console.log(pig("email"))
console.log(pig("glove"))

function printStuff (n){
    if (n % 2 !== 0 ){
        return "WEIRD"
    } if (n >= 2 && n <= 5){
        return "NOT WEIRD"
    } if (n >= 6 && n<= 20){
        return "WEIRD"
    } if (n > 20){
        return "NOT WEIRD"
    }
}
console.log(printStuff(22))
console.log(printStuff(2))
console.log(printStuff(4))
console.log(printStuff(5))

function reverse(word){
    let arr = word.toLowerCase().split("")
    let rev = arr.reverse()
    if (rev.join("").toString() === word.toLowerCase()){
        return true
    } else {
        return false
    }
}
console.log(reverse("racecar"))
console.log(reverse("pony"))

