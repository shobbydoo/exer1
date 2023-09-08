 function displaySum() {
  let sumfirstNum = Number(document.getElementById('firstNum').innerHTML)
  let sumsecondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = sumfirstNum + sumsecondNum;
  document.getElementById("sumanswer").innerHTML = ` ${sumfirstNum} + ${sumsecondNum}, equals to ${sumtotal}` ;
}

document.getElementById('sumButton').addEventListener("click", displaySum);

 function displayDiff() {
  let difffirstNum = Number(document.getElementById('difffirstNum').innerHTML)
  let diffsecondNum = Number(document.getElementById('diffsecondNum').innerHTML)

  let total = difffirstNum - diffsecondNum;
  document.getElementById("diffanswer").innerHTML = ` ${difffirstNum} - ${diffsecondNum}, equals to ${difftotal}` ;
}

document.getElementById('diffButton').addEventListener("click", displayDiff);
    
