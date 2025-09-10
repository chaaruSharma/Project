let count=0;
let kuler=required("kuler");
const readlineSync=require("readline-sync");
let username=readlineSync.question("enter your name");
console.log(kuler(`Hello, ${username} welcome to quizify`,));

const database={
     quiz:[
        {
            questions:"let a={},b={},c={} (a==b)&&(a===c)&&(a===c)",
            options:{
                a:"false",
                b:"true",
                c:"undefined",
                d:"error"
            },
            answer:"a"
        },
        {
            questions:"object.assign(a,b,c) will do what",
            options:{
                a:"a=b=c",
                b:"a=b",
                c:"a=b+c",
                d:"a=b&c"
            },
            answer:"c"
        },
        {
            questions: "object.assign(target,source) creates which type of copy?",
            options:{
                a:"deep copy",
                b:"shallow copy",
                c:"no copy",
                d:"creates new reference"
            },
            answer: "b"
        },
        {
            questions:"is method chaining possible with forEach?",
            options:{
                a: "yes",
                b:"no"
            },answer: "b"
        },
    ]
}

const leaderboard={
    data:[
        {
            name: "ashish",
            score: 1
        },
        {
            name:"riya",
            score: 2,
        },
        {
            name:"jay",
            score:3,
        },
        {
            name:"ashish",
            score:4
        }

    ]
}


function logic(userAnswer,answer){
    if(userAnswer==answer){
        console.log("your answer is correct");
        console.log(`correct answer : ${answer}`);
        count++;
    }
    else{
        console.log("wrong answer");
        console.log(`your correct answer is ${answer}`);
    }
}



function showQuestion (database){
    for(let i=0;i<database.quiz.length;i++){
    console.log(`\nQ${i+1}-${database.quiz[i].questions}\n`)

     
     for(let key in database.quiz[i].options){
        console.log(`${key}:${database.quiz[i].options[key]}`)}
       
       
        let userAnswer=readlineSync.question("write your option here : ").toLowerCase();
        logic(userAnswer,database.quiz[i].answer)
     }
    console.log(`your score is  : ${count}`);

}       

function highScorer(leaderboard){
    leaderboard.data.push({ name:username,score:count})
    
    let sortedScore=leaderboard.data.sort((a,b)=>b.score-a.score);
   console.log("\n check your position on leader board");
    for(let leader of sortedScore){
        console.log(`${leader.name} - score: ${leader.score}`);
    }
}
showQuestion(database);
highScorer(leaderboard);

