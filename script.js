function myFunctionMail() {
  let copyText = document.getElementById("myMail");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}

function myFunctionNumber() {
  let copyText = document.getElementById("myNumber");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}
