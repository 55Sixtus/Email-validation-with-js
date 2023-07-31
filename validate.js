function submitAll() { 
        validate();
     // checkLastName();
    // checkEmail()

}
function validate() {
    var text_box = document.getElementById('Name').value;
    if (text_box ==""){
       var error = '<p style="color: #fff; background-color: red; width: 200px; height: 30px; padding: 10px;">First name required</p>'

        document.getElementById('message').innerHTML=error;
        return false;
        
        

    }
    else{
        document.getElementById('message').innerHTML='first name is okay';
        // document.write('field is empty')

    }
// }

// // second function check
// function checkLastName() {  //running from sumitAll function()
    var text_box = document.getElementById('Name2').value;
    var error1 = '<p style="color: #fff; background-color: red; width: 200px; height: 30px; padding: 10px;">Last name required</p>'
    if (text_box ==""){
      

        document.getElementById('message2').innerHTML=error1;
        return false;
        

    }
    else{
        document.getElementById('message2').innerHTML='last name is ok';
        

    }
// }
// // 3rd function check
// function checkEmail(){
    var text_box = document.getElementById('Email').value;
    var atSign = text_box.indexOf('@'); //this function is testing for @ sign
    var error3 = '<p style=" color: red; width: 200px; height: 30px; padding: 10px;">Invalid Email Include an "@"</p>';
    var error2 = '<p style="color: #fff; background-color: red; width: 200px; height: 30px; padding: 10px;">Email Required</p>';
    if (text_box ==""){
       
        document.getElementById('message3').innerHTML=error2;
        return false;
    }
    else if( atSign == -1){
        document.getElementById('message3').innerHTML = error3;
    }
    else{
        document.getElementById('message3').innerHTML='Email is okay ';
    }
}

// ============Email split and join==============
function longEmailCheck(){
var longEmail = document.getElementById('longEmail').value;
var emailArray = longEmail.split(',');
var newString = emailArray.join(':');

document.write(newString);
var i;
for(i = 0; i<emailArray.length; i++){
    document.write(emailArray[i] + '<br>');
}
    


}

// this section is wrong
// function validate() {
//     var textBox1 = document.forms['Name'].value;
//     // var textBox2 = document.getElementById('Name2').value;
//     // var textBox3 = document.getElementById('Email').value;
    
    
    // if (textBox1  =="" ){
//        var error = '<p style="color: #fff; background-color: red; width: 200px; height: 30px; padding: 10px;">Required</p>'
//         document.getElementById('message').innerHTML=textBox1;
//         // console.log('nothing entered')
//         document.write(error)
        

//     }
//     else{
//         document.getElementById('message').innerHTML='lastName';
//         document.write('<p style="color: red; font-size: 20px;">Field is empty</p>')

//     }
// }