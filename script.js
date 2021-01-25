function getRandomNumber(num) {
    // Get a random number between 0 and n - 1
    return Math.floor(Math.random() * num)
}

const quotableWords = {
    // Save words that would stay the same each time
    hope: ['yet to come', 'here', 'near', 'on the way'],
    achieve: ['all your goals', 'all your dreams', 'whatever you set your mind to', 'anything'],
    businessHabits: ['Consistency', 'Creativity', 'Discipline', 'Grit'],
    neverGiveUp: ['your goals', 'your dreams', 'your future'],
    yourTime: ['shine', 'celebrate', 'sing', 'rejoice', 'be happy']
}

// Store the inspirational quotes in an array
let inspirationalQuotes = []

// Iterate over the object using a for loop
for (let energy in quotableWords) {
    let newWords = getRandomNumber(quotableWords[energy].length)

    // Use the properties of the object to create custom messages for the inspirationalQuotes array
    switch (energy) {
        case 'hope':
            inspirationalQuotes.push(`Your best is ${quotableWords[energy][newWords]}!`)
            break
        case 'achieve':
            inspirationalQuotes.push(`You can achieve ${quotableWords[energy][newWords]}!`)
            break
        case 'businessHabits':
            inspirationalQuotes.push(`${quotableWords[energy][newWords]} will take you far in business.`)
            break
        case 'neverGiveUp':
            inspirationalQuotes.push(`Never give up on ${quotableWords[energy][newWords]}!`)
            break
        // case 'yourTime':
            inspirationalQuotes.push(`It's your time to ${quotableWords[energy][newWords]}!`)
            break
        default:
            inspirationalQuotes.push('What are you thankful for?')
    }
}

console.log(inspirationalQuotes);

/* console.log('Your best is yet to come.');
console.log('Yes, you can achieve all of your goals and dreams.');
console.log('Consistency and creativity are crucial to success in business.');
console.log('Never, ever, give up on your goals.');
console.log("It's your time to shine!");

function mixedMessage(arr) {
    const message = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            Math.random() * word;
            case message1:
                if ()
        }
    }

} */
