const user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

//=====================

function isEmpty(obj) {
    for (let whatEverNameWePleaseButUsuallyKey in obj) {
        return false
    }
    return true
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

//=======================

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0
for (let againWhatEverNameWeWant in salaries) {
    sum += salaries[againWhatEverNameWeWant]
}

console.log(sum)
//=========================

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

  function multiplyNumeric(obj) {
      for (let key in obj) {
          if (typeof obj[key] === 'number') {
              obj[key *= 2]
          }
      }
  }