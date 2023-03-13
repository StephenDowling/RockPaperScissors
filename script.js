/*
    Rock Paper Scissors Game
    S Dowling 21189994
    11 03 2023
*/

function play(){
    var userName;
    var userChoice;
    var computerChoice;
    userName=(prompt("To begin, please enter your name"));
    if(userName==""){
        alert("Name cannot be blank. Please try again");
    }
    else{
        userChoice=(prompt("Welcome "+userName+"! Please enter your choice - rock, paper or scissors"));
        userChoice=userChoice.toLowerCase();
        if(userChoice=="rock"){
            computerChoice="paper";
            alert("Computer has chosen "+computerChoice+"! Sorry "+userName+", you lose!")
            hide();
        }
        else if(userChoice=="paper"){
            computerChoice="scissors";
            alert("Computer has chosen "+computerChoice+"! Sorry "+userName+", you lose!")
            hide();
        }
        else if(userChoice=="scissors"){
            computerChoice="rock"; 
            alert("Computer has chosen "+computerChoice+"! Sorry "+userName+", you lose!")
            hide();
        }
        else{
            alert("Invalid input, please try again")
        }
    }
}
function hide() {
    document.getElementById("game").style.display="none";
}