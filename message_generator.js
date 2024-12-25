// Message Generator 

const readline = require('readline'); // to input in Node.

const randomMessages = [
    'You didn\'t checked your Calander. Do it now.', 
    'I think you should do a workout.', 
    'Why are you here?', 
    'Ask yourself, what do i want today.',
    'Have you eaten enough?',
    'You should ask your Doctor about your mental Health!',
    'I like you.',
];

// Funciton that starts up after starting the program
function startProgram() {
    console.log('Welcome to Message Generator. Please follow the following step:');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(`Please write 'Message': `, (userInput) => {
        if (userInput==='Message') {
            const randomIndex = Math.floor(Math.random() * randomMessages.length);
            console.log(`Message: ${randomMessages[randomIndex]}`);
        } else {
        console.log('Did you write anything or correctly?');
        }
        rl.close();

    });
}

startProgram();