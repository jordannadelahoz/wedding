var lista = {
    "drespino@uc.cl":{"colchagua":true,"bellavista":false,"concon":true,"vina":true},
    "jddelahoz@uc.cl":{"colchagua":false,"bellavista":true,"concon":true,"vina":true}
}

// Revisa email guardado en localStorage
checkEmail();

function checkEmail() {
    //Leer localStorage 
    var userEmail = localStorage.getItem("userEmail")
    // Leer el email del formulario
    var input = document.getElementById('email_eventos').value
    if(input != "") {
        userEmail = input; 
        localStorage.setItem("userEmail", userEmail);
    }
    // Revisar que esté en la lista
    if(userEmail in lista){
        console.log("está")        
        // mostrar los eventos que tenga ese email
        if(lista[userEmail].colchagua) document.getElementById('colchagua').style.display='block';
        else document.getElementById('colchagua').style.display='none';

        if(lista[userEmail].bellavista) document.getElementById('bellavista').style.display='block';
        else document.getElementById('bellavista').style.display='none';

        if(lista[userEmail].concon) document.getElementById('concon').style.display='block';
        else document.getElementById('concon').style.display='none';
        
        if(lista[userEmail].vina) document.getElementById('vina').style.display='block';
        else document.getElementById('vina').style.display='none';
    }
    else{
        console.log("no está")
        document.getElementById('colchagua').style.display='none';
        document.getElementById('bellavista').style.display='none';
        document.getElementById('concon').style.display='none';
        document.getElementById('vina').style.display='none';
    }
}
