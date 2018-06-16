// Set variables up here for all of the events in the document ready.

const $scoreboard = $('#scoreboard');

const $body = $('body');



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
  switch (move) {
  case 'Donkey Sauce':
    console.log('You have dealt 25 damage to ' + opponent.name);
    break;
  case 'Frosted Tip Projectiles':
  console.log('You have dealt 10 damage to ' + opponent.name);
  break;
  case 'Bowling Shirt Flamethrower':
    console.log('You have dealt 100 damage to ' + opponent.name);
    break;
  case 'Alliterative TV Show':
    console.log('You have dealt 40 damage to ' + opponent.name);
    break;
}}
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
    break;
  case 'Appropriate Clothing':
  console.log('You have dealt 10 damage to ' + opponent.name);
  break;
  case 'Mid-life Crisis Antidote':
    console.log('You have dealt 100 damage to ' + opponent.name);
    break;
  case 'Good Table Manners':
    console.log('You have dealt 40 damage to ' + opponent.name);
    break;
}}
  // give message about guard
  shield () {
super.shield ()
  }
}

const guy = new TVChef('Guy', 1000);

const wAA = new Enemy('Well Adjusted Adult', 1000);

console.log(guy.weapons.donkeySauce.power);

console.log(wAA.weapons.midlifeCrisisAntidote.power);

guy.attack(wAA, 'Frosted Tip Projectiles');
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
