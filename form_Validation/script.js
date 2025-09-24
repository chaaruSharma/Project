function jsFun(event) {
    event.preventDefault();
    console.log("hello");
    console.log("something");
    var user= document.getElementById('user').value;

    var password= document.getElementById('pass').value;

    var confirm_pass= document.getElementById('confirm_pass').value;

    var mail= document.getElementById('mail').value;

    var card= document.getElementById('card').value;

    var phone= document.getElementById('phone').value;




    //our regular expressions

    var userReg = /^[a-zA-Z .]{5,12}$/;

    var passReg= /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,20}$/;
    var mailReg= /^[a-zA-Z0-9._]{5,}@[a-zA-z]{5,}[.]{1}[a-zA-Z.]{3,6}$/;

    var cardReg= /^[0-9]{5}[-]{1}[0-9]{7}[-]{1}[0-9]{1}$/;
    var phoneReg= /^[0][0-9]{10}$/;



    if (user.trim() === "") {
    document.getElementById('usererror').innerHTML = "Username cannot be empty";
    return false;
} else if (!userReg.test(user)) {
    document.getElementById('usererror').innerHTML = "Please enter valid user name";
    return false;
} else {
    document.getElementById('usererror').innerHTML = "";
}

if(password.trim() ===""){
    document.getElementById('passerror').innerHTML = "Password cannot be empty";
    return false;
}else if(!passReg.test(password)){
    document.getElementById('passerror').innerHTML = "Please enter valid password";
    return false;
}else{
    document.getElementById('passerror').innerHTML = "";
}
if(confirm_pass.trim() ===""){
    document.getElementById('confirm_passerror').innerHTML = "Confirm Password cannot be empty";
    return false;
}else if(password !== confirm_pass){
    document.getElementById('confirm_passerror').innerHTML = "Passwords do not match";
    return false;
}else{
    document.getElementById('confirm_passerror').innerHTML = "";
}
if(mail.trim() ===""){
    document.getElementById('mailerror').innerHTML = "Email cannot be empty";
    return false;
}else if(!mailReg.test(mail)){
    document.getElementById('mailerror').innerHTML = "Please enter valid email";
    return false;
}else{
    document.getElementById('mailerror').innerHTML = "";
}
if(card.trim() ===""){
    document.getElementById('carderror').innerHTML = "Card cannot be empty";
    return false;
}else if(!cardReg.test(card)){
    document.getElementById('carderror').innerHTML = "Please enter valid card number";
    return false;
}else{
    document.getElementById('carderror').innerHTML = "";
}
if(phone.trim() ===""){
    document.getElementById('phoneerror').innerHTML = "Phone cannot be empty";
    return false;
}else if(!phoneReg.test(phone)){
    document.getElementById('phoneerror').innerHTML = "Please enter valid phone number";
    return false;
}else{
    document.getElementById('phoneerror').innerHTML = "";
}
return true;
}let formData= document.querySelector(".form");
let submitButton= document.querySelector(".button");
let errormsg= document.querySelector(".error-message");
let firstName, lastName, email, password,field;

formData.addEventListener("keyup", (e)=>{
    e.preventDefault();
    field=e.target.dataset.key;
    switch(field){
        case "firstName":
            firstName=e.target.value;
            break;
            case "lastName":
            lastName=e.target.value;
            break;
            case "email":
            email=e.target.value;
            break;
            case "password":
            password=e.target.value;
            break;
            default:
            lastName=firstName=email=password="";
            break;

    }
});

submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(firstName, lastName, email, password);
});



