function clickChoose(id){
  window.location.href = window.location.origin + "/playing.html?choose=" + id;
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("score").innerHTML = window.localStorage.getItem('score')? window.localStorage.getItem('score') : 0;
})
