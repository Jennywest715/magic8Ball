/*Create an input field for users to ask a question
Create a label for your input field telling your user to "Ask me anything!"
Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
Create a div with an id of "answers" that you will insert the images into using js
Create an "ask" function that when clicked, 
will choose a random 8ball image and insert it into your "answers" div
Replace the input field with the user's question when displaying the answer
*/



const userName = "";

userName ? console.log(`Welcome, ${userName}!`) : console.log("Welcome!");

let userQuestion = ""

// document.getElementById("myButton").onclick = function(){
//     let myName = document.getElementById("myText").value;
    
// }

let answerButton = document.querySelector("#getAnswer");
let magicVideo = document.querySelector("#myVideo")

answerButton.addEventListener("click",()=>{
    magicVideo.classList.toggle("wiggle")
    setTimeout(()=>{
        magicVideo.classList.toggle("wiggle")
    },3000)

})

//Answer ARRAY 20
let answers = ["Yes!", "No", "Very Unlikly", "Oh Heavens No", "Ask Your Mother First", "Totally!",
"Abosolutly!", "Nah..", "Perhaps", "Try again later", "Heck Yeah!", "Bad Idea", "Good Idea!", "Love it! Yes!",
"Maybe", "You Wish", "I forgot the question", "Ain't Nobody Got Time For That", "I'll Tell You Later", "Ask Google",
"Look to the sky for your answer"]

let random = Math.random()

console.log(random)*answers.length;

let video = document.getElementById("myVideo");





const input = document.getElementById("input");
const button = document.getElementById("addButton");