let currentSlimeXP = 0;
let currentSlimeLevel = 1;
let currentFoodCount = 0;
let currentCoinCount = 1000;
let currentShopFoodPrice = 50;
let currentAutomaticFoodGather = 0;

const slimeXP = document.querySelector("#slimeXP");
const slimeLevel = document.querySelector("#slimeLevel");
const foodCount = document.querySelector("#foodCount");
const gatherFood = document.querySelector("#gatherFood");
const feedSlime = document.querySelector("#feedSlime");
const buyFood = document.querySelector("#buyFood");
const shopFoodPrice = document.querySelector("#shopFoodPrice");
const increaseShopFoodPrice = document.querySelector(
"#increaseShopFoodPrice"
);
const automaticFoodGather = document.querySelector("#automaticFoodGather");
const upgradeAutomaticFoodGather = document.querySelector("#upgradeAutomaticFoodGather");

const upgradeCosts = [100, 250, 500, 1000];

feedSlime.addEventListener("click", () => {
if (currentFoodCount > 0) {
    currentFoodCount--;
    foodCount.textContent = currentFoodCount;
    currentSlimeXP += 10;
    slimeXP.textContent = currentSlimeXP;
    if (currentSlimeXP >= 100) {
    currentSlimeXP = 0;
    currentSlimeLevel++;
    slimeLevel.textContent = currentSlimeLevel;
    }
}
});

gatherFood.addEventListener("click", () => {
currentFoodCount++;
foodCount.textContent = currentFoodCount;
});

buyFood.addEventListener("click", () => {
if (currentCoinCount >= currentShopFoodPrice) {
    currentCoinCount -= currentShopFoodPrice;
    currentFoodCount++;
    foodCount.textContent = currentFoodCount;
}
});

increaseShopFoodPrice.addEventListener("click", () => {
currentShopFoodPrice += 10;
shopFoodPrice.textContent = currentShopFoodPrice;
});

upgradeAutomaticFoodGather.addEventListener("click", () => {
if (currentCoinCount >= upgradeCosts[currentAutomaticFoodGather]) {
    currentCoinCount -= upgradeCosts[currentAutomaticFoodGather];
    currentAutomaticFoodGather++;
    automaticFoodGather.textContent = `Automatic Food Gather: Level ${currentAutomaticFoodGather}`;
}
});

setInterval(() => {
if (currentAutomaticFoodGather > 0) {
    currentFoodCount++;
    foodCount.textContent = currentFoodCount;
}
}, 1000);

/* Create an array of weather temperatures for San Francisco by month*/
