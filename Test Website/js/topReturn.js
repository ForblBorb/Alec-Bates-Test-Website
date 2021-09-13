function topReturn() {
  var modal = document.getElementById("topReturnModal");
  var yesBtn = document.getElementById("topReturnYes");
  var noBtn = document.getElementById("topReturnNo");

  //makes modal popup visible
  modal.style.display = "block";

  yesBtn.onclick = function () {
    modal.style.display = "none";
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Other Browsers
  };
  noBtn.onclick = function () {
    modal.style.display = "none";
  };
}
