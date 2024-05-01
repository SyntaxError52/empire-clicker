let cities = 0;
let cps = 0;

console.log('[Here to cheat arent you?]')
console.log('[See code at https://github.com/SyntaxError52/empire-clicker.git]')

function update(){
  document.getElementById('counter').innerHTML = `${cities} Cities, ${cps} Cps`;
}

function add(){
  cities++;
  update()
}

function upgrade(gift, cost){
  if (cities >= cost){
    cities -= cost;
    cps += gift
  } else {
    alert('Sorry, you are too broke for that.')
  }
    update()
}

setInterval(() => {
  cities += cps;
  update()
}, 1000);

function save(currentCities, citiesPS){
  cities = currentCities;
  cps = citiesPS
}

function genSave(){
  console.log(`To save use type the following code: save(${cities}, ${cps})`)
}

// ! DO NOT EDIT
function tradeOff(gift, cost){
  cities += cost;
  cps -= gift;
  alert('Soul Sold. >:)');
}

function powerup(){
  cps *= 1.5 
}

const powerup = document.getElementById('powerup');

setInterval(() => {
  powerup.style.display = 'contents';
  setTimeout(() => {
    powerup.style.display = 'none';
  }, 1000);
}, 50000);