{
  const welcome = () => {
    console.log("Hellow World!");
  };

  const buttonElement = document.querySelector(".js-button");

  const changeImage = () => {
    const characterImage = document.querySelector(".js-image");

    if (characterImage.getAttribute("src") === "./images/0001.webp") {
      characterImage.setAttribute("src", "./images/cartoon.png");
      buttonElement.innerText = "Zmień Jasia w człowieka";
    } else {
      characterImage.setAttribute("src", "./images/0001.webp");
      buttonElement.innerText = "Zmień w kreskówkową postać";
    }
  };

  const init = () => {
    buttonElement.addEventListener("click", changeImage);

    welcome();
  };

  init();
}
