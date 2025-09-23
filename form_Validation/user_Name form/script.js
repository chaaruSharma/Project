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


}