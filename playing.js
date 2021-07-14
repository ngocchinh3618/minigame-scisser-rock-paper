document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("score").innerHTML = window.localStorage.getItem('score')? window.localStorage.getItem('score') : 0;
  const url = new URL(window.location.href);
  const choose = url.searchParams.get("choose");
  const hands = ["paper","rock","scissors"];
  document.getElementById("imgLeft").src = `images/icon-${hands[choose]}.svg`;
  document.getElementById("mainleft").className = `circle-${hands[choose]}`;
  
  const index = Math.round(Math.random() * 2);
  document.getElementById("imgRight").src = `images/icon-${hands[index]}.svg`;
  document.getElementById("mainRight").className = `circle-${hands[index]}`;

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
  window.open('./index.html','_self')
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