const lowerCase = "abcdefghijklmnopqrtusvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRTUSVWXYZ";
const numbers = "0123456789";
const specChars = "§~+!%=();_*?@&#<>[]";
let inputamount = 10; // default érték jelszóhossz
const passwordlength = document.querySelector("#passwordLength")
lowerCasenum = document.querySelector("#numLowerCase").value
upperCasenum = document.querySelector("#numUpperCase").value
specialCasenum = document.querySelector("#numSpecial").value
numberCasenum = document.querySelector("#numNumbers").value

function getRandomCharacter(str) {
    if (!str) return null; // Handle empty strings
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex];
}

function randompassword(){
    for (let index = 0; index < inputamount; index++) {
        

        console.log(specialCasenum)
        let lowerCaseChar = getRandomCharacter(lowerCase)
        let upperCaseChar = getRandomCharacter(upperCase)
        let numberChar = getRandomCharacter(numbers)
        let secCaseChar = getRandomCharacter(specChars)
 
    }
}
randompassword()
rerender()
function rerender(){
    
}
