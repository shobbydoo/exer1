 function displaySum() {
  let sumfirstNum = Number(document.getElementById('firstNum').innerHTML)
  let sumsecondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("sumanswer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}

document.getElementById('sumButton').addEventListener("click", displaySum);

 function displayDiff() {
  let difffirstNum = Number(document.getElementById('firstNum').innerHTML)
  let diffsecondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum - secondNum;
  document.getElementById("diffanswer").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${total}` ;
}

document.getElementById('diffButton').addEventListener("click", displayDiff);
    
