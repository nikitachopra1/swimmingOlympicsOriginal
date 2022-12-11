var canvas;
var backgroundImage, track, boySwimmerImage, girlSwimmerImage;
var  powerCoinImage, boySwimmer, girlSwimmer
var blueFishImage, rainbowFishImage, yellowFish;
var database, gameState;
var form, player, playerCount;
var allPlayers, boy, girl, powerCoins, fishes, fishesPositions;
var swimmers = [];


function preload() {
  backgroundImage = loadImage("./assets/background.jpg");
  boySwimmerImage = loadImage("../assets/boySwimmer.png");
  girlSwimmerImage = loadImage("../assets/girlSwimmer.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  blueFishImage = loadImage("./assets/blueFish.png");
  yellowFishImage = loadImage("./assets/rainbowFish.png");
  rainbowFishImage = loadImage("./assets/rainbowFish.png");
  track = loadImage("./assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
