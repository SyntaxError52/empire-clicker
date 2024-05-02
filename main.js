let cities = 0;
let cps = 0;

console.log('[Here to cheat arent you?]')
console.log('[See code at https://github.com/SyntaxError52/empire-clicker.git]')

console.log('[How to save]')
console.log('[1. Right click and click Inspect]')
console.log('[2. Go to console]')
console.log('[3. Copy the code into the console: genSave()]')
console.log('[4. If all is working the genSave function should generate code that you can use]')
console.log('[5. Now if you reload you can load the save by using that code]')
console.log('[Don\'t worry! A new save/load system is currently being worked on.]')

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
z
function tradeOff(gift, cost){
  cities += cost;
  cps -= gift;
  alert('Soul Sold. >:)');
}
