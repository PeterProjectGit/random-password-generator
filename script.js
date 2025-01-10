//Kawazu Sakura
const lowerCase = "abcdefghijklmnopqrtsvwxyz"
const upperCase = "abcdefghijklmnopqrtsvwxyz".toUpperCase()
const passwd = [];

//generating button
document.getElementById("generateBtn").onclick = handleClick;

function handleClick(){
    const values = getInputValue(); 
    getReadyPasswd(values);
    console.log(values)
}

function sendMessage(message) {
    alert(message)
}

function getInputValue(){
    const inputElements = document.querySelectorAll("input");
    const values = [];
    
    if ( inputElements.length > 0)
    {
        for (const elem of inputElements) {
            if (input.value === "") {
                sendMessage("minden adatot meg kell adjá")
                inputElements[index].focus();
                return []
            }
            values[inputElements[index].id] = inputElements[index.value];
        }
        return values
        } 
}

function createPasswdPart(count, collection) {
    for (let i = 0; i < count; i++){
        passwd.push(collection[Math.floor(Math.random()*collectiion.length)]) 
    }
    
}

function getReadyPasswd(values) {
    var finalpassword = [];
    for (let key in values) {
        switch (key) {
            case ""
        }
    }
} 
    