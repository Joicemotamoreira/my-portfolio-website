function getMail() {
  let copyText = document.getElementById("myMail");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }

  copyMessage.style.display = "block";
  setTimeout(function () {
    copyMessage.style.display = "none";
  }, 1500);
}

function getNumber() {
  let copyText = document.getElementById("myNumber");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }

  copiedNumber.style.display = "block";
  setTimeout(function () {
    copiedNumber.style.display = "none";
  }, 1500);
}

function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    themeButton.innerHTML = "dark_mode";
  } else {
    body.classList.add("dark");
    themeButton.innerHTML = "light_mode";
  }
}

let themeButton = document.querySelector("#changeThemeIcon");
themeButton.addEventListener("click", changeTheme);
