let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');

function guess() {
    let input = document.getElementById('user-guess');
    
    if (answer === '' || attempt === '') {
        setHiddenFields();
    }

    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt.value++;
    }
}

function setHiddenFields() {

    let randomNumber = Math.floor(Math.random() * 9999);
    let randomNumberString = randomNumber.toString();

    if (randomNumberString.length < 4) {
        let paddingLength = 4 - randomNumberString.length;

        for (let i = 0; i < paddingLength; i++) {
            randomNumberString = "0" + randomNumberString;
        }
    }

    answer.value = randomNumberString;
    attempt.value = 0;
}

function setMessage(messageValue) {
    message.innerHTML = messageValue;
}

function validateInput(inputValue) {
    
    if (inputValue.length != 4) {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }

    return true;
}
