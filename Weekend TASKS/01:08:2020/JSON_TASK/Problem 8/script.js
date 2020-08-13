// I have a mock data of security Questions and Answers.You
// function should take the object and a pair of strings and should
// return
//     if the quest is present and
// if its valid answer

var securityQuestions = [{
        question: "What was your first pet’ s name ? ",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car ? ",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in ? ",
        expectedAnswer: "NYC"
    }
]
// var ques = "What was your first pet’ s name ? ";
// var ans = "FlufferNutter";

var ques = "What was your first pet’ s name ? ";
var ans = "DufferNutter";
function chksecurityQuestions(securityQuestion, question, answer) {
    let count = 0;
    const quest = JSON.stringify(question);
    const answ = JSON.stringify(answer);
    for (i = 0; i < securityQuestion.length; i++){
        if (quest === JSON.stringify(securityQuestion[i].question)) {
            if (answ === JSON.stringify(securityQuestion[i].expectedAnswer)) {
                count++;
                break;
            }
        }
    }
    if (count === 0) {
        return false;
    } else {
        return true;
    } 
}

const status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status);