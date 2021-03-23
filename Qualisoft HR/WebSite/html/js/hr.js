$(function () { //Kjøres når dokumemtet er ferdig lastet
 
 });
function faved(){
    console.log("TEST");
    if($("#cb1").prop('checked')){
        $("#fav1").html($("#demo1").html());
    }if($("#cb2").prop('checked')){
        $("#fav2").html($("#demo2").html());
    }
    if($("#cb3").prop('checked')){
        $("#fav3").html($("#demo3").html());
    }
    if($("#cb4").prop('checked')){
        $("#fav4").html($("#demo4").html());
    } 
    
    else{
        alert("Ingen favoritter");
    }
}