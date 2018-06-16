// Set variables up here for all of the events in the document ready.

const $scoreboard = $('#scoreboard');

const $body = $('body');

const $conanButton = $('.conan-button');

const $guyButton = $('.guy-button');



//////////////////////////////////////////
// All my functions go here
const winGame = (opponent) => {
  if (opponent.health <= 0){
    alert('you won the game');
  }
}


//////////////////////////////////////////
// Create my general fighter class here
class Character {
  // health will be the same for both characters
  constructor(name, health){
    this.name = name
    this.health = health
  }
  // Attack methods that must do accuracy function, draw away health if hit, log message, and lead to an animation
  attack(opponent, move){
    console.log(opponent.health);
  }
  // method to allow character to guard and gain some health
  shield(){
    console.log('shield');
  }
}

/////////////////////////////////////////
// TVChef class goes here
class TVChef extends Character {
  //// Constructor with super
  constructor(name, health){
    super(name, health)
  //// Weapons
    this.weapons = {
      donkeySauce: {
        power: 25,
        accuracy: .7
      },
      frostedTipProjectiles: {
        power: 10,
        accuracy: 1.0
      },
      bowlingShirtFlameThrower: {
        power: 100,
        accuracy: .1
      },
      alliterativeShowTitles: {
        power: 40,
        accuracy: .5
      },
    }
  }
  // give message about partic attack
  attack(opponent, move){
  super.attack(opponent, move)
  const rando = Math.random() * 1;
  switch (move) {
  case 'Donkey Sauce':
    if (rando < this.weapons.donkeySauce.accuracy){
    console.log('You have dealt 25 damage to ' + opponent.name);
    opponent.health -= 25;
  }
    else {
      console.log('you missed');
    }
    break;
  case 'Frosted Tip Projectiles':
    if (rando < this.weapons.frostedTipProjectiles.accuracy){
    console.log('You have dealt 10 damage to ' + opponent.name);
    opponent.health -= 10;
    }
    else {
      console.log('you missed');
    }
    break;
  case 'Bowling Shirt Flamethrower':
  if (rando < this.weapons.bowlingShirtFlameThrower.accuracy){
    console.log('You have dealt 100 damage to ' + opponent.name);
    opponent.health -= 100;
    }
    else {
    console.log('you missed');
  }
  break;
  case 'Alliterative TV Show':
  if (rando < this.weapons.alliterativeShowTitles.accuracy){
    console.log('You have dealt 40 damage to ' + opponent.name);
    opponent.health -= 40;
    }
    else {
    console.log('you missed');
  }
  break;
}
winGame(wAA);
$conanButton.show();
$guyButton.hide();
}
  // give message about guard
  shield () {
super.shield ()
}
}

/////////////////////////////////////////
// Enemy class goes here
class Enemy extends Character {
//// Constructor with super
  constructor(name, health){
    super(name, health)
//// Weapons
    this.weapons = {
      healthConsciousFood: {
        power: 25,
        accuracy: .7
      },
      appropriateClothing: {
        power: 10,
        accuracy: 1.0
      },
      midlifeCrisisAntidote: {
        power: 100,
        accuracy: .1
      },
      goodTableManners: {
        power: 40,
        accuracy: .5
      },
    }
  }
  // give message about partic attack
  attack(opponent, move){
  super.attack(opponent, move)
  switch (move) {
  case 'Health Conscious Food':
    console.log('You have dealt 25 damage to ' + opponent.name);
    opponent.health -= 25;
    break;
  case 'Appropriate Clothing':
  console.log('You have dealt 10 damage to ' + opponent.name);
  opponent.health -= 10;
  break;
  case 'Mid-life Crisis Antidote':
    console.log('You have dealt 100 damage to ' + opponent.name);
    opponent.health -= 100;
    break;
  case 'Good Table Manners':
    console.log('You have dealt 40 damage to ' + opponent.name);
    opponent.health -= 40;
    break;
}
$conanButton.hide();
$guyButton.show();
}
  // give message about guard
  shield () {
super.shield ()
  }
}

const guy = new TVChef('Guy', 1000);

const wAA = new Enemy('Well Adjusted Adult', 1000);

console.log(guy.weapons.donkeySauce.power);

// commented this out for practice console.log(wAA.weapons.midlifeCrisisAntidote.power);

// guy.attack(wAA, 'Frosted Tip Projectiles');
guy.shield();
wAA.shield();
$(()=> {
  $("#donkey-sauce").on('click', ()=>{guy.attack(wAA, $(event.currentTarget).text())
  });
  $("#alliterative-tv-show").on('click', ()=>{guy.attack(wAA, $(event.currentTarget).text())
  });
  $("#bowling-shirt-flamethrower").on('click', ()=>{guy.attack(wAA, $(event.currentTarget).text())
  });
  $("#frosted-tip-projectiles").on('click', ()=>{guy.attack(wAA, $(event.currentTarget).text())
  });
  $("#health-conscious-food").on('click', ()=>{
    wAA.attack(guy, $(event.currentTarget).text())
  });
  $("#appropriate-clothing").on('click', ()=>{
    wAA.attack(guy, $(event.currentTarget).text())
  });
  $("#mid-life-crisis-antidote").on('click', ()=>{
    wAA.attack(guy, $(event.currentTarget).text())
  });
  $("#good-table-manners").on('click', ()=>{
    wAA.attack(guy, $(event.currentTarget).text())
  });


  // on click events for each of the attacks
  // we will draw the html text from the event current target to get the input
})
