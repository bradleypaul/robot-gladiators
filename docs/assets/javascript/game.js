let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;
let enemies = ["Roborto", "Amy Android", "Robo Trumble"];
// You can also log multiple values at once like this

let enemyHealth = 50;
let enemyAttack = 12;

const fight = function (enemyName) {// if player choses to fight, then fight
    if (promptFight.toLowerCase() === "fight") {
        enemyHealth -= playerAttack;
        console.log(`Enemy lost ${playerAttack} health. Now at ${enemyHealth}`);

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        playerHealth -= enemyAttack;
        console.log(`Enemy lost ${enemyAttack} health. Now at ${playerHealth}`);

        
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    } else if (promptFight.toLowerCase() === "skip") {
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
};

for(const enemy in enemies) {
    fight(enemy);
}