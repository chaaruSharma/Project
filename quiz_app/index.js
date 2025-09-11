let count=0;
let readlineSync=require("readline-sync");
let kuler=require("kuler");

let username=readlineSync.question("enter your name : ");
console.log(kuler(`Hello, ${username} welcome to quizify`,"#b8663b"));

const database={
     quiz:[
        {
            questions:"let a={},b={},c={} (a==b)&&(a===c)&&(a===c)",
            options:{
                a:"false",
                b:"true",
                c:"undefined",
                d:"error",
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
        console.log(kuler(`correct answer : ${answer}`,"#22c55e"));
        count++;
    }
    else{
        console.log("wrong answer");
        console.log(kuler(`your correct answer is ${answer}`,"#22c55e"));
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
   console.log(kuler("\n check your position on leader board 😂💕","#facc15"));
    for(let leader of sortedScore){
        console.log(kuler(`${leader.name} - score: ${leader.score}`,"#6ee7b7"));
    }
}
showQuestion(database);
highScorer(leaderboard);

