const formdata = {

}

function handleSubmit(event) {
    //debugger;
    for (let control of event) {
        if(control.id) {
        formdata[control.id] = control.value;
        }
    }
    console.log("You are now registered", formdata);
    event.reset();

    sessionStorage.setItem('userData', JSON.stringify(formdata));
    window.location='landing.html';

    return false;
}
const userData = JSON.parse(sessionStorage.getItem('userData'));
const nameSpan = document.getElementById('nameSpan');

nameSpan.innerText = userData.firstname + ''+ userData.lastName;