function multiply(){
const num1 = document.getElementById('firstnum').value;
 const num2 = document.getElementById('secondnum').value;
 console.log(num1*num2);
 document.getElementById("result").innerText=result;
}

function add(){
const num1 = document.getElementById('firstnum').value;
 const num2 = document.getElementById('secondnum').value;
 console.log (Number(num1)+Number(num2));
 document.getElementById("result").innerText=result;
 }

 function subtract(){
const num1 = document.getElementById('firstnum').value;
 const num2 = document.getElementById('secondnum').value;
 result=num1-num2;
 document.getElementById("result").innerText=result;
 }

 function divide(){
const num1 = document.getElementById('firstnum').value;
 const num2 = document.getElementById('secondnum').value;
 result=num1/num2;
 document.getElementById("result").innerText=result;
 }

