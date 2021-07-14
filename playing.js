document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("score").innerHTML = window.localStorage.getItem('score')? window.localStorage.getItem('score') : 0;
  // console.log(window.localStorage.getItem('score'))
  var url = new URL(window.location.href);
  var choose = url.searchParams.get("choose");
  var hands = ["paper","rock","scissors"];
  if(hands[choose] === "paper"){
    document.getElementById("imgLeft").src = "images/icon-paper.svg";
    document.getElementById("mainleft").className = "circle-blue";
  }
  else if(hands[choose] === "rock"){
    document.getElementById("imgLeft").src = "images/icon-rock.svg";
    document.getElementById("mainleft").className = "circle-pink";
  }
  else{
    document.getElementById("imgLeft").src = "images/icon-scissors.svg";
    document.getElementById("mainleft").className = "circle-yellow";
  }
  
  var index = Math.round(Math.random() * 2);

  if(hands[index] === "paper"){
    document.getElementById("imgRight").src = "images/icon-paper.svg";
    document.getElementById("mainRight").className = "circle-blue";
  }
  else if(hands[index] === "rock"){
    document.getElementById("imgRight").src = "images/icon-rock.svg";
    document.getElementById("mainRight").className = "circle-pink";
  }
  else{
    document.getElementById("imgRight").src = "images/icon-scissors.svg";
    document.getElementById("mainRight").className = "circle-yellow";
  }

  if (choose == index) {
    document.getElementById("result").innerHTML="Draw!!!"
    document.getElementById("result1").innerHTML="Draw!!!"
    addScore(1);
  }
  else if (choose == 0 && index == 1 || choose == 1 && index == 2 || choose == 2 && index == 0){
    document.getElementById("result").innerHTML="You win!!!";
    document.getElementById("result1").innerHTML="You win!!!";
    document.getElementById("animRipple1").className = "main__ripple";
    addScore(3);

  }
  else{
    document.getElementById("result").innerHTML="you lose!!!";
    document.getElementById("result1").innerHTML="you lose!!!";
    document.getElementById("animRipple2").className = "main__ripple";
    addScore(-2);
  }
});

function clickAgain(){
  window.location.href = window.location.origin
}

function addScore(score){
  let localScore = window.localStorage.getItem('score');
  if (localScore !== null) {
    console.log(localScore);
    window.localStorage.setItem('score',parseInt(localScore)+score);
  }
  else{
    window.localStorage.setItem('score',score);
  }
  document.getElementById("score").innerHTML=window.localStorage.getItem('score');
}