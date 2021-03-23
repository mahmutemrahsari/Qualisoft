$(function () { //Kjøres når dokumemtet er ferdig lastet

});

 function validate() {
    var epost = $("#epost").val();
    var passord = $("#passord").val();

    if (epost == null || epost == "") 
    {
            alert("Vennligst skriv inn epost.");
            return false;
    }
    
    if (passord== null ||passord== "") 
    {
             alert("Vennligst skriv inn passord.");
             return false;
    }

    if(epost=="nora@email.com" && passord=="1234")
    {
             alert('Log inn vellyket');
        window.location.href='hr.html';
    }else{
         alert('Feil epost eller passord!');
    }

       
}            