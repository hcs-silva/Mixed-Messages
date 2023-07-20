// Generate random numer

let randNum = num =>{
    return Math.floor(Math.random()*num);
}
//Add an object with the arrays containing the Messages
const Motivation= {
    Sad : ["An arrow can only be shot by pulling it backward.","If you are sad, it is okay to acknowledge your sadness.","Your hardest times often lead to the greatest moments of your life" ],
    Frustrated: ["Success is not built on success. It's built on failure. It's built on frustration. Sometimes it is built on catastrophe.","Frustration is a very positive sign. It means that the solution to your problem is within range, but what you're currently doing isn't working, and you need to change your approach in order to achieve your goal.","Trying to please everyone is a recipe for stress, misery, and frustration. Be yourself. It will be good to know who is down with that."],
    Angry: ["Do not waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.","There are two things a person should never be angry at, what they can help, and what they cannot.","Anger is a valid emotion. It is only bad when it takes control and makes you do things you do not want to do.","Anger does not solve anything; it builds nothing.","Anger is the wind which blows out the lamp of the mind."],
};

//iterate through the object
for (let emotion in Motivation) {

}