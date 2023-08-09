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
  "A fully tested react app that uses client side routing",
  "omarnaguib.github.io/Shopping-Cart/"
);

const memoryGame = Project(
  "Memory Game",
  memoryGamePic,
  "https://github.com/OmarNaguib/Memory-Game",
  "A fully tested react app that uses client side routing",
  "omarnaguib.github.io/Memory-Game/"
);

const cvBuilder = Project(
  "Shopping Cart",
  cvBuilderPic,
  "https://github.com/OmarNaguib/CV-Builder",
  "A fully tested react app that uses client side routing",
  "omarnaguib.github.io/CV-Builder/"
);

const battleship = Project(
  "Shopping Cart",
  battleshipPic,
  "https://github.com/OmarNaguib/Battleship",
  "A fully tested react app that uses client side routing",
  "omarnaguib.github.io/Battleship//"
);

const todo = Project(
  "Shopping Cart",
  todoPic,
  "https://github.com/OmarNaguib/Todo-List",
  "A fully tested react app that uses client side routing",
  "omarnaguib.github.io/Todo-List/"
);

const weatherApp = Project(
  "Shopping Cart",
  weatherAppPic,
  "https://github.com/OmarNaguib/Weather-App",
  "A fully tested react app that uses client side routing",
  "omarnaguib.github.io/Weather-App/"
);
