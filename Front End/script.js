function calculation() {
    const num1 = +document.getElementById('firstnum').value;
     const num2 = +document.getElementById('secondnum').value;

return {
    multiply: function (){
     writeOutput(num1*num2);
    },
    
    add: function(){
        writeOutput(num1+num2);
     },
    
     subtract: function(){
        writeOutput(num1-num2);
     },
    
     divide: function(){
        writeOutput(num1/num2);
     }
};
}


     function writeOutput(out) {
         console.log(out);
         document.getElementById('result').innerText = out;
     }