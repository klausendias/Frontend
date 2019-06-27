const animals = ['Olliephant', 'Tiger', 'Zebra', 'Dragon Klaus', 'Doggy', 'Valligator'];

const output = animals.values();
for (let elements of animals) { 
    console.log("Animal:",elements); 
  } 

const request = new XMLHttpRequest();

request.onload = () => {
    const parsedData = JSON.parse(request.responseText);
    console.log('DATA:',parsedData);
    document.getElementById('Name1').append('Name:', parsedData.squadName);
    document.getElementById('Name2').append('City:', parsedData.homeTown);
    document.getElementById('Name3').append('Year:', parsedData.formed);
    document.getElementById('Name4').append('Power:', parsedData.secretBase);
};

request.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json')

request.send();
console.log('Sent');