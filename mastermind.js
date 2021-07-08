var readlineSync = require('readline-sync');

const calcScore = (code, guess) => {
    let codeCopy = [...code]
    let guessCopy = [...guess]
    let correctPos = 0, incorrectPos = 0;
    let temp = [];
    for (let i = 0; i < guess.length; i++) {
        if (codeCopy[i] === guessCopy[i]) {
            correctPos++;
            codeCopy[i] = -1;
            guessCopy[i] = -2;
        } else {
            temp.push(codeCopy[i])
        }
    }
    guessCopy.map(num => temp.includes(num) ? incorrectPos++ : null)


    console.log(correctPos, incorrectPos)
    return { correctPos, incorrectPos }
}

const randomNumberGenerator = () => {
    let result = [];
    let i = 0;
    while (i < 4) {
        let num = Math.floor(Math.random() * 5 + 1);
        result.push(num.toString());
        i++;
    }
    return result;
}

const playGame = () => {
    let numberofTries = 0;
    const num = randomNumberGenerator();
    let guess = 0;
    while (numberofTries < 10 || guess !== "quit") {
        guess = readlineSync.question('Guess the 4-digit code: ');
        let result = calcScore(num, guess.split(""));
        if (result.correctPos === 4) {
            console.log("Correct - You Win!")
            return
        }
        console.log(numberofTries + 1 + ") " + guess);
        console.log(result.correctPos + " digit(s) in the correct position");
        console.log(result.incorrectPos + " digit(s) in the incorrect position");

        numberofTries++;


    }
    console.log("You lose. Code was " + num)
    return

}

playGame();


