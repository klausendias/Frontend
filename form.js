 function add(){

    var T1= window.document.forms[0].elements[0];
    var T2= window.document.forms[0].elements[1];
    var T3= window.document.forms[0].elements[2];

    if (T1.value==""){
        window.alert("First Num is missing");
        T1.focus();
    }

    else if(T2.value==""){
        window.alert("Second Num is missing");
        T1.focus();
    }

    else{
        T3.value=parseint(T1.value+T2.value);
    }
}
