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

    if (getResults(input.value)) {
        setMessage("You Win! :)");
    } else {
        if (attempt.value >= 10) {
            setMessage("You Lose! :(");
        } else {
            setMessage("Incorrect, try again.");
        }
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

function getResults(code) {

    let results = document.getElementById("results");
    let result = "";
    let correctDigits = 0;

    result += '<div class="row"><span class="col-md-6">';

    for (let i=0; i<code.length; i++) {

        let currentUserGuessDigit = code.charAt(i);
        let currentAnswerDigit = answer.value.charAt(i);

        if (currentUserGuessDigit === currentAnswerDigit)
        {
            result += '<span class="glyphicon glyphicon-ok"></span>';
            correctDigits++;
        }
        else if (answer.value.indexOf(currentUserGuessDigit) !== -1)
        {
            result += '<span class="glyphicon glyphicon-transfer"></span>';
        }
        else
        {
            result += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }

    result += "</div>";

    results.innerHTML += result;

    return correctDigits === answer.value.length;
}

function showAnswer(isWin) {

    var code = document.getElementById("code");
    code.innerHTML = answer.value;

    if (isWin) {
        code.className += " success";
    } else {
        code.className += " failure";
    }
}
