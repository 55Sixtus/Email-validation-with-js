function SendAll(){
    chimex()
    Ezimex()
    Ezimex()
    chichi()
    checkRadio()
}
function chimex(){
var box = document.getElementById("Name").value;
var errorMessage = '<p style="color:#ffff; background-color:red ";>FirstName Reqired</p>';
var okayMessage = '<p style="color:#ffff; background-color:green";>FirstName is defined</p>';
if(box == ""){
   
    document.getElementById("newmessage").innerHTML= errorMessage;
    return false;
}
else{
    document.getElementById('newmessage').innerHTML= okayMessage;
}
}
function Ezimex() {
    var box = document.getElementById("Name1").value;
var errorMessage = '<p style="color:#ffff; background-color:red ";>lastName Reqired</p>';
var okayMessage1 = '<p style="color:#ffff; background-color:green";>lastName is defined</p>';

if(box == ""){
    document.getElementById('newmessage1').innerHTML= errorMessage;
    return false;
}
else{
    document.getElementById('newmessage1').innerHTML= okayMessage1;
}

}
function Ezimex(){
    var box = document.getElementById("Email").value;
    var errorMessage = '<p style="color:#ffff; background-color:red ";>Email is Reqired</p>';
    var okayMessage1 = '<p style="color:#ffff; background-color:green";>Email is defined</p>';
    var atSign = box.indexOf('@'); //this function is testing for @ sign
    var errorMessage2 = '<p style=" color: red; width: 200px; height: 30px; padding: 10px;">Invalid Email Include an "@"</p>';
    var dotCom = box.indexOf('.com')
    var dotComCheck ='<p style=" color: red; width: 200px; height: 30px; padding: 10px;">Invalid Email detected Include  ".com"</p>';
   
    if(box == ""){
        document.getElementById("newmessage3").innerHTML= errorMessage;
        return false;
    }
    else if(atSign == -1){
        document.getElementById("newmessage3").innerHTML= errorMessage2;
    }
     else if(dotCom == -1){
        document.getElementById("newmessage3").innerHTML= dotComCheck ;
    }
    else{
        document.getElementById("newmessage2").innerHTML= okayMessage1;
    }
    
    
}
function chichi() {
    var box = document.getElementById("Number").value;
var errorMessage = '<p style="color:#ffff; background-color:red ";>PhoneNumber Reqired</p>';
var okayMessage = '<p style="color:#ffff; background-color:green";>phoneNumber is defined</p>';
var okayMessage1 = '<p style="color:#ffff; background-color:green";>phoneNumber is defined</p>';
if(box == ""){
   
    document.getElementById("newmessage3").innerHTML= errorMessage;
    return false;
}
else{
    document.getElementById('newmessage3').innerHTML= okayMessage;
}

function checkRadio(){
 var len = document.form1.job.length;
 console.log(len);
 var jobType = "";
 var i;
 for ( var i = 0; i < len; i++){
     if(document.form1.jobType[i].value;)
     break;
 }
}
if(jobType==""){
    document.getElementById("radioError").innerHTML = 'No Option Selected';
    return false;
}
}