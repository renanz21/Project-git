function validate(){
    var staffPassword = document.getElementById('staffAccess').value;

    //regex check to meet requirements
    var regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (regx.test(staffPassword)){
        
    }
    else {
        document.getElementById('invalid').style.visibility= "visible"
    }
}
