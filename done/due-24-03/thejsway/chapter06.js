// TODO: create the character object here
const aurora = {
    name: 'Aurora',
    health: 150,
    strength: 25,
    xp: 0,

    describe() {
        return `${this.name} has ${this.health} health points, ${this.xp} XP, and ${this.strength} as strength`
    }
}
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

//===================
const dog = {
    name: 'DuckyDuck',
    species: 'mix',
    size: 'M',
    
    bark() {
        return 'Hello my friends'
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
//====================

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

const circle = {
    circumference() {
        return 2 * Math.PI * r
    },

    area() {
        return Math.PI * (r * r) 
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

//====================

const account = {
    name: 'Alex',
    balance: 0,

    credit(changeBalance) {
        this.balance += changeBalance
       
    },

    describe() {
        return `${this.name}, balance ${this.balance}`
    }
}


console.log(account.describe())

account.credit(250)
account.credit(-80)

console.log(account.describe())

