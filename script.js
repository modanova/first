var newArr = [];

function inputNewArr() {
  document.getElementById("your-array-box").style.display = "none";
  userArr = [];
  let str = document.getElementById('enter-numbers').value;
  newArr = str.split(',').map((x) => x.replaceAll(' ', ''));
  newArr = newArr.map(x => parseInt(x));
  console.log(newArr);
  for (let j = 0; j < newArr.length; j++) {
    if (Number.isNaN(newArr[j])) {
      newArr.splice(j, 1);
      j--;
    }
  }
  document.getElementById("your-array-box").style.display = "inline";
  let displayArr = document.getElementById('your-array');
  displayArr.innerHTML = newArr;
}

const input = document.getElementById('enter-numbers');
input.addEventListener('input', aler('hi'));


function getUserInput() {
  document.getElementById("your-array-box").style.display = "inline";
  let arrLen = document.getElementById('input').value;
  return arrLen;
}

function generateArr() {
  let x = 0;
  newArr = [];
  for(let i = 0; i < getUserInput(); i++) {
    x = Math.floor((Math.random() * 100) + 1);
    newArr.push(x);
  }
  return newArr;
}

function outputNewArr() {
  let yourArr = document.getElementById("your-array");
  yourArr.innerHTML = generateArr();
  return yourArr;
}

// Use the filter method on an array to fill a new array with the numbers which are divisible by two.
function filterArr() {
  let output = document.getElementById("output");
  output.innerHTML = newArr.filter(word => word % 2 == 0);
  if (output.innerHTML == '') {
    output.innerHTML = 'None';
  }
  return output;
}

//Use the reduce method, to return the total of the elements of the array it is called on.
function reduceArr() {
  const sumArr = newArr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  let output = document.getElementById("output");
  output.innerHTML = sumArr;
}

function executeFunc() {
  let output = document.getElementById("output");
  output.innerHTML = filterArr();
  return output;
}
