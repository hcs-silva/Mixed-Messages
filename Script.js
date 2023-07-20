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
        Motivational.push(`If you are feeling "${Motivation[property][emotionIndex]}".`);
        break;
    case "Quote" :
        let quoteIndex =randNum(Motivation[property].length);
        Motivational.push(`Then "${Motivation[property][quoteIndex]}" .`);
        break;
    case "Solution" :
        let solutionIndex =randNum(Motivation[property].length);
        Motivational.push(`And "${Motivation[property][solutionIndex]}.`);
   break;
}

}
//Junta os resultados do switch statement injetados no array Motivational e junta-os com uma quera de linha.
const Formatar = (array) => {
    const formatted= Motivational.join('\n');
    console.log(formatted);
}

Formatar(Motivational)