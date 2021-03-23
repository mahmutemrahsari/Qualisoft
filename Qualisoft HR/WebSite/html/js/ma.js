$(function () { //Kjøres når dokumemtet er ferdig lastet
   //
   //checkIfChoosen();
});

function checkIfChoosen(){
    console.log("TEST");
    var checkBox = $('#myCheck');
    if(checkBox.checked == true){
        $("#success").html("Ready");
        window.location.href='sendforslaget.html';

    }else{
        $("#success").html("PRØV IGJEN!");
    }
}