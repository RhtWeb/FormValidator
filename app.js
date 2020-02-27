document.getElementById("name").addEventListener("blur", validName);
document.getElementById("pincode").addEventListener("blur", validPin);
document.getElementById("email").addEventListener("blur", validEmail);
document.getElementById("phone").addEventListener("blur", validPhone);

function validName(){
    const name = document.getElementById("name");
    re = /^[a-zA-Z]{1,10} ?[a-zA-Z]{1,10}$/;

    if(!re.test(name.value)){
        name.classList.add("is-invalid");
    }else{
        name.classList.remove("is-invalid");
    }
}

function validPin(){
    const pin = document.getElementById("pincode");
    re = /^[0-9]{6}$/;

    if(!re.test(pin.value)){
        pin.classList.add("is-invalid");
    }else{
        pin.classList.remove("is-invalid");
    }
}

function validEmail(){
    const email = document.getElementById("email");
    re = /^([a-z0-9\-\_\+\.]{2,20})@([a-z]{2,8})\.([a-z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add("is-invalid");
    }else{
        email.classList.remove("is-invalid");
    }
}

function validPhone(){
    const phone = document.getElementById("phone")
    re = /^\(?\+?[0-9]{0,4}\)? ?[0-9]{7,10}$/;

    if(!re.test(phone.value)){
        phone.classList.add("is-invalid");
        // phone.className = "form-control is-invalid";
    }else{
        phone.classList.remove("is-invalid");
    }
}
