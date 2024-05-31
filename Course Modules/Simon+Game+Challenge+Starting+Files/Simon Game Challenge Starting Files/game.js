var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];

function newSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    return randomNumber;
}

var randomChosenColour = buttonColours[newSequence()];
gamePattern.push(randomChosenColour);