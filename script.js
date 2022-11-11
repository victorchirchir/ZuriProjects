//databse
let userDetailsDatabase={}

//function to get user details
let getDetails=function(){
    //username
    let username=prompt('Enter Your Username')

    if(username==null){
        return
    }

    let ValidateUsername=function(username){
        if(username.length<10 && username.length>0){
            return true
        }else{
            return false
        }
    }

    while(ValidateUsername(username)==false){
        username=prompt('Username Must have  atleast 1 digit and less than 10 digits')

    }

    userDetailsDatabase['UserName']=username

    
       //email adresss


    let email=prompt('Enter your Email Address')

    if(email==null){
        return
    }

    let ValidateEmail=function(email){
        const emailcheck= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        emailcheckResult=emailcheck.test(email)
        if (emailcheckResult==true){
            return true
        }else{
            return false
        }
    }


 
    while(ValidateEmail(email)==false){
        email=prompt('Enter a valid email address')
    }

    userDetailsDatabase['Email']=email

    //phone number 

    let PhoneNumber=prompt('Enter your phone number')

    if(PhoneNumber==null){
        return
    }

    let ValidatePhoneNumber=function(PhoneNumber){
        if(PhoneNumber.length==10){
            return true
        }else{
            return false
        }
    }

    
    while(ValidatePhoneNumber(PhoneNumber)==false){
        PhoneNumber=prompt('Phone number must have 10 digits, try again!!')

    }

    userDetailsDatabase['PhoneNumber']=PhoneNumber


    //password
    let password=prompt('Enter Your Passsword')

    if(password==null){
        return
    }

    let passwordValidate=function(password){
        if(password.length<6){
            return false
        }else{
            return true
        }
    }

    while(passwordValidate(password)==false){
        password=prompt('Password must have at least 6 digits,try again!!')

    }

    userDetailsDatabase['Password']=password

    //confirmPassword

    let confirmPassword=prompt('Confirm Your Password')

    if(confirmPassword==null){
        return
    }

    let ValidateConfirmPassword=function(confirmPassword){
        if(confirmPassword==password){
            return true
        }else{
            return false
        }
    }

    while(ValidateConfirmPassword(confirmPassword)==false){
        confirmPassword=prompt('Passwords do not watch, try again!!')

    }

    userDetailsDatabase['ConfirmPassword']=confirmPassword


    
}



function DisplayUserDetails(){
    alert(
        `These are your details\n\n username: ${userDetailsDatabase.UserName}\nEmail: ${userDetailsDatabase.Email}\nPhone Number: ${userDetailsDatabase.PhoneNumber}\n
        `
    )

}