/*Create an input field for users to ask a question
Create a label for your input field telling your user to "Ask me anything!"
Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
Create a div with an id of "answers" that you will insert the images into using js
Create an "ask" function that when clicked, 
will choose a random 8ball image and insert it into your "answers" div
Replace the input field with the user's question when displaying the answer
*/


let answerButton = document.querySelector("#getAnswer");
let magicVideo = document.querySelector("#myVideo")



//Answer ARRAY 20
let answers = ["Yes!", "No", "Very Unlikly", "Oh Heavens No", "Ask Your Mom", "Totally!",
"Make it happen", "Nah..", "Perhaps", "I Know Everything... Except That", "Heck Yeah!", "Bad Idea", "Good Idea!", "Love it! Yes!",
"Maybe", "You Wish", "I forgot the question", "Ain't Nobody Got Time For That", "I'll Tell You Later", "Ask Google",
"Look to the sky for your answer","Ask Your Dad"]

document.getElementById("response").innerHTML=answers;

function myFunction(){
    answers.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=answers[0];
    document.getElementById("response").style.fontSize="21px";
}



let video = document.getElementById("myVideo");





const input = document.getElementById("input");
const button = document.getElementById("addButton");