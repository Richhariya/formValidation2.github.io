function validation() {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirm_password = document.getElementById("confirmPassword").value
    let checkBox = document.getElementById("CheckBox")
    let submit = document.getElementById("button2")
    

    error = false
    if(firstName.length>=3)
    {
        // document.getElementById("valid-firstName").style.display = 'block'
        document.getElementById("invalid-firstName").style.display = 'none'
    }
    else{
        error = true
        document.getElementById("valid-firstName").style.display = 'none'
        document.getElementById("invalid-firstName").style.display = 'block'
    }

    if(lastName.length>=3){
        // document.getElementById("valid-lastName").style.display = 'block'
        document.getElementById("invalid-lastName").style.display = 'none'
    }
    else{
        error = true
        document.getElementById("valid-lastName").style.display = 'none'
        document.getElementById("invalid-lastName").style.display = 'block'
    }
    
    if(email.includes("@") &&
       email.includes(".") &&
       email.indexOf("@")>0 &&
       email.substr(email.lastIndexOf(".")+1).length>=2)
       {
        // document.getElementById("valid-email").style.display = 'block'
        document.getElementById("invalid-email").style.display = 'none'
       }
       else{
        error = true
        document.getElementById("valid-email").style.display = 'none'
        document.getElementById("invalid-email").style.display = 'block'
       }

       if(password.length>=8 &&
        password.includes("#")||password.includes("@")||password.includes("$")&&
        password.includes(0||1||2||3||4))
        {
            // document.getElementById("valid-password").style.display = 'block'
            document.getElementById("invalid-password").style.display = 'none'
        }
        else{
            error = true
            document.getElementById("valid-password").style.display = 'none'
            document.getElementById("invalid-password").style.display = 'block'
        }


       if(password===confirm_password && password !==""){
        // document.getElementById("valid-confirm-password").style.display = 'block'
        document.getElementById("invalid-confirm-password").style.display = 'none'
       }
       else{
        error = true
        document.getElementById("valid-confirm-password").style.display = 'none'
        document.getElementById("invalid-confirm-password").style.display = 'block'
       }
     
     if(checkBox.checked == false){
        console.log(1)
       document.getElementById("invalid-checkbox").style.display = 'block'
     }
     else{
        document.getElementById("invalid-checkbox").style.display = 'none'
     }  
    
    if(error== false)
    {
        alert("Your Details has been saved successfully")
        document.getElementById("form-1").reset()
       
    }
}
