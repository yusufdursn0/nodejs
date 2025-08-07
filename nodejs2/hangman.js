const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const words = JSON.parse(fs.readFileSync("words.json"));
let leaderboard = JSON.parse(fs.readFileSync("leaderboard.json"));

function contains(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return true;
    }
    return false;
}

function containsInString(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return true;
    }
    return false;
}

function mainMenu() {
    console.log("\n--- Welcome to Hangman Game ---");
    console.log("1) New Game");
    console.log("2) Leaderboard");
    console.log("3) Quit");

    rl.question("Choose: ", (answer) => {
        if (answer === "1") {
            rl.question("Enter your name: ", (name) => {
                const nameExists = leaderboard.some(entry => entry.username.toLowerCase() === name.toLowerCase());

                if (nameExists) {
                    console.log("This username is already taken. Please choose a different name.");
                    return mainMenu();
                }

                chooseLevel(name);
            });
        } else if (answer === "2") {
            showScores();
        } else if (answer === "3") {
            console.log("Bye.");
            mainMenu();
        } else {
            mainMenu();
        }
    });
}

function chooseLevel(username) {
    console.log("\nChoose difficulty:");
    console.log("1) Easy (5 lives)");
    console.log("2) Medium (7 lives)");
    console.log("3) Hard (9 lives)");

    rl.question("Your choice: ", (level) => {
        let lives = 5;
        let difficulty = "easy";

        if (level === "2") {
            lives = 7;
            difficulty = "medium";
        } else if (level === "3") {
            lives = 9;
            difficulty = "hard";
        }

        const wordList = words[difficulty];
        const randomIndex = Math.floor(Math.random() * wordList.length);
        const word = wordList[randomIndex];

        playGame(username, word.toLowerCase(), lives, []);
    });
}

function playGame(username, word, lives, guessed) {
    let shown = "";

    for (let i = 0; i < word.length; i++) {
        if (contains(guessed, word[i])) {
            shown += word[i] + " ";
        } else {
            shown += "_ ";
        }
    }

    console.log("\nWord: " + shown);
    console.log("Lives: " + lives);

    if (lives === 0) {
        console.log("You lost! Word was: " + word);
        return mainMenu();
    }

    if (shown.indexOf("_") === -1) {
        const score = 100 * lives;
        console.log("You won. Score: " + score);
        leaderboard.push({ username, score });
        fs.writeFileSync("leaderboard.json", JSON.stringify(leaderboard, null, 2));
        return mainMenu();
    }

    rl.question("Guess a letter: ", (letter) => {

        if (contains(guessed, letter)) {
            console.log("You already guessed that.");
        } else if (containsInString(word, letter)) {
            guessed.push(letter);
        } else {
            guessed.push(letter);
            lives--;
        }

        playGame(username, word, lives, guessed);
    });
}

function showScores() {
    console.log("\n--- Leaderboard ---");
    if (leaderboard.length === 0) {
        console.log("No scores yet.");
    } else {
        leaderboard.sort((a, b) => b.score - a.score)
        leaderboard.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry.username} - ${entry.score}`);
        });
    }

    mainMenu();

}

mainMenu();
