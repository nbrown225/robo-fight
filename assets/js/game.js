var playerName = window.prompt("WHAT IS YOUR ROBOT'S NAME??");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyName = "BROBOTO";
var enemyHealth = 50;
var enemyAttack = 15;

var fight = function() {
    window.alert("WELCOME TO ROBO RUMBLE!");
    //SUBTRACT VALUE OF PLAYERATTACK FROM ENEMY HEALTH
    enemyHealth = enemyHealth - playerAttack;

    //CONSOLE.LOG RESULT TO KNOW IT WORKED
    //console.log(enemyHealth);

    console.log(playerName + " ATTACKED " + enemyName + ". " + enemyName + " NOW HAS " + enemyHealth);

    //CHECK ENEMY HEALTH
    if (enemyHealth <= 0) {
        window.alert(enemyName + " HAS BEEN OBLITORATED!")
    }
    else (
        window.alert(enemyName + " HAS " + enemyHealth + " LEFT. FINISH THIS!!")
    )

    //SUBTRACK VALUE OF ENEMYATTACK FROM PLAYERHEALTH
    playerHealth = playerHealth - enemyAttack;

    //CONSOLE.LOG RESULT TO KNOW IT WORKED
    //console.log(playerHealth);

    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //CHECK PLAYER HEALTH
    if (playerHealth <= 0) {
        window.alert(playerName + " HAS BEEN OBLITORATED")
    }
    else (
        window.alert(playerName + " HAS " + playerHealth + " LEFT. GET UP AND FIGHT! ")
    )
}
// STOPPED AT 3 1 7
fight();


/*
REPLACEd with new code
FIGHT FUNCTION
var playerName = window.prompt("WHAT'S YOUR ROBOT'S NAME?");
window.alert(playerName);
console.log(playerName);

function fight() {
    window.alert("THE FIGHT HAS BEGUN");
}

//fight();*/