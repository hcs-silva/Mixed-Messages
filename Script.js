// Generate random numer

let randNum = (num) =>{
    return Math.floor(Math.random()*num);
}


//Add an object with the arrays containing the Messages
const Motivation= {
    Emotion: ["Sad","Angry","Frustrated","Happy","Embarassed" ],
    Quote: ["Keep Kalm", "Enjoy The Ride","Keep Dreaming","Play Dead","Keep Fighting"],
    Solution: ["Push Harder","Pay Attention","Look Around", "You are not alone"]

}
let Motivational =[];
//iterate through the object
for (let property in Motivation) {
switch (property) {
    case "Emotion":
        let emotionIndex =randNum(Motivation[property].length);
        Motivational.push(Motivation[property][emotionIndex]);
    case "Quote" :
        let quoteIndex =randNum(Motivation[property].length);
        Motivational.push(Motivation[property][qouteIndex]);
    case "Solution" :
        let solutionIndex =randNum(Motivation[property].length);
        Motivational.push(Motivation[property][solutionIndex]);
}

}