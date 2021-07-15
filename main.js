function clickChoose(id){

  window.open(`./playing.html?choose=${id}`,"_self")
  // window.location.href = window.location.origin + "/playing.html?choose=" + id;
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("score").innerHTML = window.localStorage.getItem('score')? window.localStorage.getItem('score') : 0;
})
