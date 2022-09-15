/*Create an input field for users to ask a question
Create a label for your input field telling your user to "Ask me anything!"
Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
Create a div with an id of "answers" that you will insert the images into using js
Create an "ask" function that when clicked, 
will choose a random 8ball image and insert it into your "answers" div
Replace the input field with the user's question when displaying the answer
*/
$(document).ready(function(){
  


    let magic8Ball = {};
    magic8Ball.answerButton = document.querySelector("#getAnswer");
    magic8Ball.magicVideo = document.querySelector("#myVideo");
    
    magic8Ball.video = document.getElementById("myVideo");
    magic8Ball.input = document.getElementById("input");
    magic8Ball.button = document.getElementById("addButton");
    
    
    //Answers ARRAY 20
    magic8Ball.answers = ["Yes!", "No", "Very Unlikly", "Oh Heavens No", "Ask Your Mom", "Totally!",
    "Make it happen", "Nah..", "Perhaps", "I Know Everything... Except That", "Heck Yeah!", "Bad Idea", "Good Idea!", "Love it! Yes!",
    "Maybe", "You Wish", "I forgot the question", "Ain't Nobody Got Time For That", "I'll Tell You Later", "Ask Google",
    "Look to the sky for your answer","Ask Your Dad","Keep Looking For The Answer."];
    
    
        magic8Ball.answer = function(){
            $(".eightbg").effect("shake"); // shake it like a polaroid picture
            $("#image").attr("src", "magic8ball_9.png");
            magic8Ball.answers.sort(function(a,b){return 0.5 - Math.random()}); // get random answers
            document.getElementById("response").innerHTML=magic8Ball.answers[0]; //have answers show up
            document.getElementById("response").style.fontSize="22px"; // sizing for answers
        }
    
        let onClick = function() // call the function
        {
        if (document.getElementById("inputs").value === '') { //returning a response to empty string
            alert("Please enter a question");
            return;
        }
        magic8Ball.answer()
        
        };
    
    $("#getAnswer").click( onClick ); // get answers on click
    
});
