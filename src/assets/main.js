let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
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
