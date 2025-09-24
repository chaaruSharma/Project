let formData= document.querySelector(".form");
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
    console.log(firstName, lastName, email, password);});
