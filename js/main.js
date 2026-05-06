function setSeason(season) {
  let style = document.getElementById("seasonStyle");
  let text = document.getElementById("seasonText");
  let logo = document.getElementById("logo");
  let clothing = document.getElementById("clothing");

  if (season === "spring") {
    style.href = "css/spring.css";
    text.textContent = "Fresh Spring Styles!";
    logo.src = "images/spring.gif";
    clothing.src = "images/spring-wear.jpg";
  }

  else if (season === "summer") {
    style.href = "css/summer.css";
    text.textContent = "Hot Summer Deals!";
    logo.src = "images/summer.gif";
    clothing.src = "images/summer-wear.jpg";
  }

  else if (season === "fall") {
    style.href = "css/fall.css";
    text.textContent = "Leap into our Fall Wear!";
    logo.src = "images/fall.gif";
    clothing.src = "images/fall-wear.jpg";
  }

  else if (season === "winter") {
    style.href = "css/winter.css";
    text.textContent = "Stay Warm This Winter!";
    logo.src = "images/winter.gif";
    clothing.src = "images/winter-wear.jpg";
  }

else {
  style.href = "css/default.css";
  text.textContent = "Welcome to Eddie Browser!";
  logo.src = "https://i.pinimg.com/originals/79/63/fd/7963fd68329cfc8704725e2a26f7cf09.gif";
  clothing.src = "https://www.collegefashionista.com/wp-content/uploads/2018/07/affordable-clothing-stores.jpg?resize=1080%2C600";
}
}