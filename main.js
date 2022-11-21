const question = document.getElementById("question")
const choices = Array.from(document.getElementsByClassName("ans"))
const questionCounterText = document.getElementById('questionCounter')

let currentQuestion = {}
let acceptingAnswers = false
let questionCounter = 0 

// copy of full question set

let availableQuestions = []
let questions = [
        {
            question : "Which plans make up Healthpak ?",
            choice1: "AA, CI, TC", 
            choice2: "AA, CI, T2", 
            choice3: "AA, CL, T2", 
            choice4: "AA, CI, T3",
            answer: 1
        },
        {
            question : "Which plan covers you in the event of an accident ?",
            choice1: "AcidentAdvance", 
            choice2: "CriticalIllness", 
            choice3: "TransConnect", 
            choice4: "Healthpak",
            answer: 1
        },
        {
            question : "What is the highest amount of coverage you can elect ?",
            choice1: "$100,00", 
            choice2: "$10,000", 
            choice3: "$40,000", 
            choice4: "$600,000",
            answer: 2 
        },
        {
            question : "Which plan is a hospital indemnity ?",
            choice1: "TransConnect", 
            choice2: "Aflac", 
            choice3: "HospitalSelect", 
            choice4: "Healthpak",
            answer: 1 
        },
        {
            question : "Who is the TPA for TransConnect III ?",
            choice1: "Benefits", 
            choice2: "Aflac", 
            choice3: "AI Health", 
            choice4: "Amwins",
            answer: 4 
        }
    ]

    // CONSTANTS
    const MAX_QUESTIONS = 5

    startQuiz = () => {
        questionCounter = 0
        availableQuestions = [...questions]
        getNextQuestion()
    }

    getNextQuestion = () => {

        if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            return window.location.assign('/end.html')
        }

        questionCounter++
        questionCounterText.innerHTML = `${questionCounter} / ${MAX_QUESTIONS}`
        
        const questionIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionIndex]
        question.innerText = currentQuestion.question

        choices.forEach( choice => {
           const number = choice.dataset['num'] 
           choice.innerText = currentQuestion['choice' + number]
        })

        availableQuestions.splice(questionIndex, 1)

        acceptingAnswers = true 
    }

    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if(!acceptingAnswers) return

            acceptingAnswers = false
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset['num']

            const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
            
            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout( () => {

                selectedChoice.parentElement.classList.remove(classToApply)
                getNextQuestion()

            }, 1000)
          
        })
    })

        startQuiz()

// // Variables to access elements via DOM

// const presentQuestion = document.querySelector('#num-question')
// const totalQuestions = document.querySelector('#total-questions')
// const questionText = document.querySelector('#question')
// const startButton = document.querySelector('.start-btn')
// const nextButton = document.querySelector('#next-btn') 
// const answers = document.querySelectorAll('.btn')


// // Counter for current question

// let currentQuestionIndex, shuffledQuestions
// let questionCounter = 0

// // Counter for score

// let score = 0

// // List of questions

// const questions = [
//     {
//         question : "Which plans make up Healthpak ?",
//         answers: [
//             { option: "AA, CI, TC", correct: true },
//             { option: "AA, CI, T2", correct: false },
//             { option: "AA, CL, T2", correct: false },
//             { option: "AA, CI, T3", correct: false },
//         ]
//     },
//     {
//         question : "Which plan covers you in the event of an accident ?",
//         answers: [
//             { option: "AcidentAdvance", correct: true },
//             { option: "CriticalIllness", correct: false },
//             { option: "TransConnect", correct: false },
//             { option: "Healthpak", correct: false },
//         ]
//     },
//     {
//         question : "What is the highest amount of coverage you can elect ?",
//         answers: [
//             { option: "$100,00", correct: false },
//             { option: "$10,000", correct: true },
//             { option: "$40,000", correct: false },
//             { option: "$600,000", correct: false },
//         ]
//     },
//     {
//         question : "Which plan is a hospital indemnity ?",
//         answers: [
//             { option: "TransConnect", correct: true },
//             { option: "Aflac", correct: false },
//             { option: "HospitalSelect", correct: false },
//             { option: "Healthpak", correct: false },
//         ]
//     },
//     {
//         question : "Who is the TPA for TransConnect III ?",
//         answers: [
//             { option: "Benefits", correct: false },
//             { option: "Aflac", correct: false },
//             { option: "AI Health", correct: false },
//             { option: "Amwins", correct: true },
//         ]
//     },
// ]

// // Load quiz when user clicks start

// function startQuiz() {
// console.log('Started')
// presentQuestion.innerText = questionCounter++
// totalQuestions.innerText = questions.length
// questionText.innerText = questions.question
// }

// // Present next question when next button is clicked

// function setNextQuestion() {
    
//     showQuestion(shuffledQuestions[currentQuestionIndex])
    

// }

// function showQuestion(question) {
//     questionText.innerHTML = question.question
//      question.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.option
//         button.classList.add('btn')
        
//      })
// }

// // Check if answer is right or wrong

// function checkAnswer() {

// }

// startQuiz()