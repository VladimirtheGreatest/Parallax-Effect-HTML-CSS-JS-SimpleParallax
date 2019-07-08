//Simple parallax

var image = document.getElementsByClassName('three');
new simpleParallax(image, {
  scale: 1.9,
  	overflow: true,
      orientation: ' down right',
    delay: 3.6,
  transition: 'cubic-bezier(0,0,0,1)'
});
var image = document.getElementsByClassName('four');
new simpleParallax(image, {
  scale: 1.2,
});
var image = document.getElementsByClassName('five');
new simpleParallax(image, {
  scale: 1.5,
  orientation: 'left'
});
var image = document.getElementsByClassName('six');
new simpleParallax(image, {
  scale: 1.9,
    overflow: true,
    delay: 3.6,
    orientation: 'right',
  transition: 'cubic-bezier(0,0,0,1)'
});

//Simple parallax end


// Customer greeting, playing with JavaScript ES6
class Customer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = getAge();
  }

  getName() {
    return 'Your name is' + ' ' +  this.firstname + ' ' + this.lastname + ' ' + 'and you are' + ' ' + this.age + ' ' + 'years old' ;
  }

  getGreetings() {
    return 'Hello';
  }
}

  const Age = prompt("What is your age");
  const getAge = () => Age;


const John = new Customer('John', 'Baptist');
console.log(John.getGreetings());
console.log(John.getName());
