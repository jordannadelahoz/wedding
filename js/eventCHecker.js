var lista = {
    "jddelahoz@uc.cl":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "drespino@uc.cl":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "marmijoc@gmail.com":{"colchagua":true,"bellavista":false,"concon":true,"vina":true},
    "gdelahoz71@gmail.com":{"colchagua":true,"bellavista":false,"concon":true,"vina":true},
    "jserespinoza8@gmail.com":{"colchagua":true,"bellavista":false,"concon":true,"vina":true},
    "ximorip@gmail.com":{"colchagua":true,"bellavista":false,"concon":true,"vina":true},
    "hdehoz@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "rem.lebowski@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "mcrippes@uc.cl":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "vicentebolt@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "jess.sandovalb@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "xvasque1@uc.cl":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "matiasgonzalez.muz@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "fitraipe@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "elgueta.nani@gmail.com":{"colchagua":false,"bellavista":false,"concon":true,"vina":true},
    "rvasqud@gmail.com":{"colchagua":false,"bellavista":false,"concon":true,"vina":true},
    "carolaarmijobarraza@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "josecorrealavandero@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "felipeamijo@live.cl":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "piera.mori.c@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "juanvbc88@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "romi.mori.contreras@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "santanafaundez@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "rafaguajardo@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "javiera.pineiro@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "diego.concha@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "jddmaturanap@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "vera.manzur@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "nicolas.saez@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "joakinho@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "amrojascohen@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "juanjoaldunate@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "pipearana@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "r.floresc89@gmail.com":{"colchagua":true,"bellavista":true,"concon":true,"vina":true},
    "wandasegrestev@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "sorojas9@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "nskoljarev@gmail.com":{"colchagua":true,"bellavista":true,"concon":false,"vina":false},
    "dairibar@gmail.com":{"colchagua":true,"bellavista":true,"concon":false,"vina":false},
    "danielrove@gmail.com":{"colchagua":true,"bellavista":true,"concon":false,"vina":false},
    "jojo.rivas@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "jose.f.hernandez@gmail.com":{"colchagua":false,"bellavista":true,"concon":true,"vina":true},
    "danimartinez.a@gmail.com":{"colchagua":false,"bellavista":true,"concon":false,"vina":false},
    "cardenasclaudio@outlook.com":{"colchagua":false,"bellavista":true,"concon":false,"vina":false},
    "ni.escarate@gmail.com":{"colchagua":false,"bellavista":true,"concon":false,"vina":false},
    "pcruces94@gmail.com":{"colchagua":false,"bellavista":true,"concon":false,"vina":false}
}

// Revisa email guardado en localStorage
checkEmail();

function checkEmail() {
    //Leer localStorage 
    var userEmail = localStorage.getItem("userEmail")
    // Leer el email del formulario
    var input = document.getElementById("email_eventos").value
    if(input != "") {
        userEmail = input; 
        localStorage.setItem("userEmail", userEmail);
    }
    // Revisar que esté en la lista
    if(userEmail in lista){
        console.log("está")        
        // mostrar los eventos que tenga ese email
        if(lista[userEmail].colchagua) document.getElementById("colchagua").style.display="block";
        else document.getElementById("colchagua").style.display="none";

        if(lista[userEmail].bellavista) document.getElementById("bellavista").style.display="block";
        else document.getElementById("bellavista").style.display="none";

        if(lista[userEmail].concon) document.getElementById("concon").style.display="block";
        else document.getElementById("concon").style.display="none";
        
        if(lista[userEmail].vina) document.getElementById("vina").style.display="block";
        else document.getElementById("vina").style.display="none";
    }
    else{
        console.log("no está")
        document.getElementById("colchagua").style.display="none";
        document.getElementById("bellavista").style.display="none";
        document.getElementById("concon").style.display="none";
        document.getElementById("vina").style.display="none";
    }
}
