const jokes = require("give-me-a-joke");
const cow = require("cowsay");

jokes.getRandomDadJoke((joke)=>{
    console.log(cow.say({
        text:joke,
        e: "-O",
        T: "U"
    }));
})