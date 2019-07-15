//Simple parallax
var image = document.getElementsByClassName('two');
new simpleParallax(image, {
  scale: 1.9,
  overflow: true,
  orientation: ' down left',
  delay: 3.6,
  transition: 'cubic-bezier(0,0,0,1)'
});
var image = document.getElementsByClassName('three');
new simpleParallax(image, {
  scale: 1.9,
  overflow: true,
  orientation: ' down right',
  delay: 3.6,
  transition: 'cubic-bezier(0,0,0,1)'
});
var image = document.getElementsByClassName('four');
new simpleParallax(image, {scale: 1.2});
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
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getName() {
    return 'Your name is' + ' ' + this.username + ' ' + this.password;
  }

  getGreetings() {
    return 'Hello';
  }
}

const input = () => document.getElementById('userInput').value;
const input2 = () => document.getElementById('userInput2').value;

const Client = new Customer(input(), input2());
Client.username = input();
Client.password = input2();

//Event listeners

document.getElementById('entrance').addEventListener("click", open = () => document.getElementById('main').classList.add("newbody"));
document.getElementById('entrance').addEventListener("click", reveal = () => document.getElementById('form').classList.add("visibleform"));
window.addEventListener("scroll", welcome = () => document.getElementById('entrance').innerHTML = "Welcome");
document.getElementById('button').addEventListener("click", greet = () => document.getElementById('greetings').innerHTML = Client.getName());
