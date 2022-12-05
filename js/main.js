{
  const buttonElement = document.querySelector(".js-button");
  const characterImage = document.querySelector(".js-image");

  buttonElement.addEventListener("click", () => {
    if (characterImage.getAttribute("src") === "./images/0001.webp") {
      characterImage.setAttribute("src", "./images/cartoon.png");
      buttonElement.innerText = "Zmień Jasia w człowieka";
    } else {
      characterImage.setAttribute("src", "./images/0001.webp");
      buttonElement.innerText = "Zmień w kreskówkową postać";
    }
  });
}
