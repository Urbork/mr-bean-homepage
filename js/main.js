let buttonElement = document.querySelector(".js-button");
let characterImage = document.querySelector(".js-image");

// buttonElement.addEventListener("click", () => {
//   switch (characterImage.getAttribute("src")) {
//     case "https://i.postimg.cc/65TRDMkQ/0001.webp":
//       characterImage.setAttribute(
//         "src",
//         "https://i.postimg.cc/LsF1g2nq/cartoon.png"
//       );
//       buttonElement.innerText = "Zmień Jasia w człowieka";
//       break;
//     default:
//       characterImage.setAttribute(
//         "src",
//         "https://i.postimg.cc/65TRDMkQ/0001.webp"
//       );
//       buttonElement.innerText = "Zmień w kreskówkową postać";
//   }
// });

buttonElement.addEventListener("click", () => {
  if (
    characterImage.getAttribute("src") ===
    "https://i.postimg.cc/65TRDMkQ/0001.webp"
  ) {
    characterImage.setAttribute(
      "src",
      "https://i.postimg.cc/LsF1g2nq/cartoon.png"
    );
    buttonElement.innerText = "Zmień Jasia w człowieka";
  } else {
    characterImage.setAttribute(
      "src",
      "https://i.postimg.cc/65TRDMkQ/0001.webp"
    );
    buttonElement.innerText = "Zmień w kreskówkową postać";
  }
});
