let footer_background_default =
  document.getElementById("footer").style.backgroundColor;

function processForm() {
  let x = document.forms["myForm"]["footer_color"].value;
  let display_text = document.forms["myForm"]["word_choices"].value;
  let optionOne = document.forms["myForm"]["option1"].checked;
  let optionTwo = document.forms["myForm"]["option2"].checked;
  let optionThree = document.forms["myForm"]["option3"].checked;

  //Validate Mandatory Fields
  if (x == "") {
    alert("Footer color must be chosen.");
    return false;
  }

  //Change Data With Form Inputs
  //Footer Background
  if (x == "reset") {
    x = footer_background_default;
  }
  document.getElementById("footer").style.backgroundColor = x;

  //Footer Effects
  if (optionOne == true) {
    document.getElementById("footer").style.boxShadow =
      "inset 7px -7px 7px  black";
  } else {
    document.getElementById("footer").style.boxShadow = "0px 0px";
  }
  if (optionTwo == true) {
    document.getElementById("footer_text").style.writingMode = "vertical-lr";
  } else {
    document.getElementById("footer_text").style.writingMode = "horizontal-tb";
  }
  if (optionThree == true) {
    document.getElementById("footer").style.borderRadius = "60px";
  } else {
    document.getElementById("footer").style.borderRadius = "0px";
  }

  //Footer Text
  document.getElementById("footer_text").innerHTML = display_text;
}
