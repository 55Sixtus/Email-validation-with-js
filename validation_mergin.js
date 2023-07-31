function submitAll() {
    checkLastName(); 
    validate();
    checkEmail()
    
    function validate() {
        var text_box = document.getElementById('Name').value;
        if (text_box ==""){
           var error = '<p style="color: #fff; background-color: red; width: 200px; height: 30px; padding: 10px;">First name required</p>'
    
            document.getElementById('message').innerHTML=error;
            return false;
            
            
    
        }
        else{
            document.getElementById('message').innerHTML='first name is ok';
            // document.write('field is empty')
    
        }
    }
    
    // second function check
    function checkLastName() {
        var text_box = document.getElementById('Name2').value;
        if (text_box ==""){
           var error1 = '<p style="color: #fff; background-color: red; width: 200px; height: 30px; padding: 10px;">Last name required</p>'
    
            document.getElementById('message2').innerHTML=error1;
            return false;
            
    
        }
        else{
            document.getElementById('message2').innerHTML='last name is ok';
            
    
        }
    }
    // 3rd function check
    function checkEmail(){
        var email = document.getElementById('Email').value;
        var atSign = email.indexOf('@');
        var dotCom = email.substr(-4);
        var error3 = '<p style=" color: red; width: 200px; height: 30px; padding: 10px;">invalid email include an "@"    </p>';
        if (email ==""){
           var error2 = '<p style="color: #fff; background-color: red; width: 200px; height: 30px; padding: 10px;">Required</p>'
            document.getElementById('message3').innerHTML=error2;
            return false;
        }
        else if( atSign == -1){
            document.getElementById('message3').innerHTML = error3;

        }
        else if( dotCom !== '.com'){
            document.getElementById('message3').innerHTML = error3;
            
        }
        else{
            document.getElementById('message3').innerHTML='Email is okay ';
            console.log(dotCom);
        }
    }

}

