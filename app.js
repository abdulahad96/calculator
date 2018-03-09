
function add(){
    document.getElementById("txt1").value= document.getElementById("add").innerHTML;
}
function sub(){
    document.getElementById("txt1").value=document.getElementById("sub").innerHTML;
}
function mul(){
    document.getElementById("txt1").value=document.getElementById("mul").innerHTML;
}
function div(){
    document.getElementById("txt1").value=document.getElementById("div").innerHTML;
}
function ione(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("i1").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("i1").innerHTML;
    }
}
function itwo(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("i2").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("i2").innerHTML;
    }
}
function ithree(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("i3").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("i3").innerHTML;
    }
}
function ifour(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("i4").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("i4").innerHTML;
    }
}
function ifive(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("i5").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("i5").innerHTML;
    }
}
function isix(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("i6").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("i6").innerHTML;
    }
}
function iseven(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("i7").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("i7").innerHTML;
    }
}
function ieight(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("i8").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("i8").innerHTML;
    }
}
function inine(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("i9").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("i9").innerHTML;
    }
}
function izero(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("i0").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("i0").innerHTML;
    }
}
function dozero(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("d0").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("d0").innerHTML;
    }
}
function ipoint(){
    if(document.getElementById("txt1").value === "+" || document.getElementById("txt1").value === "-" || document.getElementById("txt1").value === "/"|| document.getElementById("txt1").value === "x"){
        document.getElementById("txt3").value =document.getElementById("txt3").value + document.getElementById("ip").innerHTML;
    }
    else{
        document.getElementById("txt2").value =document.getElementById("txt2").value + document.getElementById("ip").innerHTML;
    }
}

function cl(){
    var t = "";
    document.getElementById("txt2").value = t;
    document.getElementById("txt1").value = t;
    document.getElementById("txt3").value = t;
}
function operate(){
    if(document.getElementById("txt1").value === "+"){
        var x =Number(document.getElementById("txt2").value) + Number(document.getElementById("txt3").value);

    }
    else if(document.getElementById("txt1").value === "-"){
        var x =Number(document.getElementById("txt2").value) - Number(document.getElementById("txt3").value);

    }
    else if(document.getElementById("txt1").value === "/"){
        var x =Number(document.getElementById("txt2").value) / Number(document.getElementById("txt3").value);

    }
    else if(document.getElementById("txt1").value === "x"){
        var x =Number(document.getElementById("txt2").value) * Number(document.getElementById("txt3").value);
        

    }
    else {
        var x = "Error";
    }
    document.getElementById("txt2").value = x;
    document.getElementById("txt1").value = "";
    document.getElementById("txt3").value = "";
}