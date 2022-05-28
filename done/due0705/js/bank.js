class Account {
    // constructor for the 
    constructor(name) {
        this.name = name,
        this.balance = 0
    };

    credit(value) {
        this.balance += value
    }

    describe() {
        console.log(`owner: ${this.name}, balance: ${this.balance}`)
    };
};

const one = new Account('Sean');
const two = new Account('brad');
const three = new Account('Georges')

one.credit(1000)
two.credit(1000)
three.credit(1000)

one.describe()
two.describe()
three.describe()