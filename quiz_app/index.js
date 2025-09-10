const { questionNewPassword } = require("readline-sync");

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

function showQuestion (){
    for(let i=0;i<database.quiz.length;i++){
    console.log(`Q${i+1}`)

     console.log(`${database.quiz[i].questions}`);
     for(let key in database.quiz[i].options){
        console.log(`${key}:${database.quiz[i].options[key]}`);
        const readlineSync=require('readline-sync');
        let username=readlineSync.question("write your option here : ");
     }}
}       
showQuestion();