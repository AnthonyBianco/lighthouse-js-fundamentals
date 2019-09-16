//Final Jeopardy Betting Strategy PROTOTYPE

/* Second Place Strategy of betting on the leader being wrong,
and the third place contestant getting it right and betting it all*/

var secondPlaceStrategy = function(firstPlace,secondPlace,thirdPlace, answer){
  var appropriateBet = 0;
  firstPlace = Math.floor(Math.random() * firstPlace);
  var string = "The appropriate bet for second place is $";
  if (answer === "correct"){
    doubleThirdPlaceScore = thirdPlace * 2;
    newSecondPlace = doubleThirdPlaceScore +1;
    appropriateBet = newSecondPlace - secondPlace; 
    if (newSecondPlace > firstPlace){
      console.log("Second Place is the new winner.");
    } else {
      console.log("First Place is the winner.")
    }
  }

  return string + appropriateBet + " which will leave third place with $" + doubleThirdPlaceScore + ", and second place with $" + newSecondPlace + ". The firstplace person got: $" + firstPlace
}

console.log(secondPlaceStrategy(20000, 2500, 2000, "correct"));
