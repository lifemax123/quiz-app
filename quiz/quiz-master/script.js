const quizQuestions = [
    {
        question: "Who invented C++?",
        a : "Dennis Ritchie",
        b : "Ken Thompson",
        c : "Brian Kernighan",
        d : "Bjarne Stroustrup",
        correct : "d",
    },
    {
        question: "Which of the following is the correct syntax of including a user defined header files in C++?",
        a : "#include [userdefined]",
        b : "#include “userdefined”",
        c : "#include <userdefined.h>",
        d : "#include <userdefined>",
        correct : "c",
    },
    {
        question: "Which of the following is used for comments in C++?",
        a : " /* comment */",
        b : "// comment */",
        c : " // comment",
        d : "both // comment or /* comment */",
        correct : "b",
    },
    {
        question: "Which of the following user-defined header file extension used in c++?",
        a : "hg",
        b : "cpp",
        c : "h",
        d : "hf",
        correct:"b",
    },
    {
        question:"Which of the following is a correct identifier in C++?",
        a : "VAR_1234",
        b :"$var_name",
        c :"7VARNAME",
        d :"7var_name",
        correct:"a",
    },
    {
        question:"Which of the following approach is used by C++?",
        a : "Left-right",
        b : "Right-left",
        c :"Bottom-up",
        d :"Top-down",
        correct:"c",
    },
    {
        question:"Which of the following type is provided by C++ but not C?",
        a : "double",
        b :"float",
        c :"int",
        d :"bool",
        correct:"d",
    },
    {
        question:"Which of the following correctly declares an array in C++?",
        a : "array{10};",
        b :"array array[10];",
        c :"int array;",
        d :"int array[10];",
        correct:"d",
    },
    {
        question:"Which is more effective while calling the C++ functions??",
        a : "call by object",
        b :"call by pointer",
        c :"call by value",
        d :"call by reference",
        correct:"d",
    },
    {
        question:"Which of the following is used to terminate the function declaration in C++?",
        a : ";",
        b :"]",
        c :")",
        d :":",
        correct:"a",
    },
];

const myscore = document.getElementById('myscore')
const answer = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a = document.getElementById('a1')
const b = document.getElementById('b1')
const c = document.getElementById('c1')
const d = document.getElementById('d1')
const submit = document.getElementById('btn')

let current = 0
let score = 0

quiz()

function quiz() {
    deselect()
    const currentQuestion = quizQuestions[current]
    question.innerText = currentQuestion.question
    a.innerText=currentQuestion.a
    b.innerText=currentQuestion.b
    c.innerText=currentQuestion.c
    d.innerText=currentQuestion.d
}

function deselect(){
    answer.forEach(answer => answer.checked = false)
}

function select(){
    let myanswer
    answer.forEach(answer => {
        if(answer.checked){
            myanswer = answer.id
        }
    })
    return myanswer;
}

submit.addEventListener('click', ()=>{
    const newanswer = select()
    if(newanswer === quizQuestions[current].correct){
        score++
    }
    current++
    if(current < quizQuestions.length){
        quiz()
    }
    else{
        myscore.innerHTML = `<h3 id="myscore1"> Your Score is ${score}/${quizQuestions.length}</h3>
        <button onclick="location.reload()">Try Again</button>
        `
        
    }
})