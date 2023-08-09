import shoppingCartPic from "./screenshots/shoppingCart.png";
import memoryGamePic from "./screenshots/memoryGame.png";
import cvBuilderPic from "./screenshots/cvBuilder.png";
import battleshipPic from "./screenshots/battleship.png";
import todoPic from "./screenshots/todo.png";
import weatherAppPic from "./screenshots/weatherApp.png";

const Project = (name, screenshot, repo, description, live) => {
  return {
    name,
    screenshot,
    repo,
    description,
    live,
  };
};

const shoppingCart = Project(
  "Shopping Cart",
  shoppingCartPic,
  "https://github.com/OmarNaguib/Shopping-Cart",
  "A fully tested React app that uses client side routing.",
  "omarnaguib.github.io/Shopping-Cart/"
);

const memoryGame = Project(
  "Memory Game",
  memoryGamePic,
  "https://github.com/OmarNaguib/Memory-Game",
  "A fun little game made with functional React components.",
  "omarnaguib.github.io/Memory-Game/"
);

const cvBuilder = Project(
  "CV Builder",
  cvBuilderPic,
  "https://github.com/OmarNaguib/CV-Builder",
  "Utilizing React to manage user input and compile a simple resume.",
  "omarnaguib.github.io/CV-Builder/"
);

const battleship = Project(
  "Battleship",
  battleshipPic,
  "https://github.com/OmarNaguib/Battleship",
  "A unit tested and SOLID aware implementaion of the popular game.",
  "omarnaguib.github.io/Battleship//"
);

const todo = Project(
  "Todo List",
  todoPic,
  "https://github.com/OmarNaguib/Todo-List",
  "A website to keep track of your tasks. made with vanilla js",
  "omarnaguib.github.io/Todo-List/"
);

const weatherApp = Project(
  "Weather App",
  weatherAppPic,
  "https://github.com/OmarNaguib/Weather-App",
  "Consuming an API endpoint to display weather data to user>",
  "omarnaguib.github.io/Weather-App/"
);

const data = [
  shoppingCart,
  memoryGame,
  cvBuilder,
  battleship,
  todo,
  weatherApp,
];

export default data;
