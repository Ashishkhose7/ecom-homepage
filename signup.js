// Email Validation
let validateemails = () => {
    let emailout = document.getElementById('emailout')//error
    let email = document.getElementById('email').value; //target
    if (email.trim().length == 0) {
        emailout.innerHTML = 'Please enter email address'
    }
    else {
        if (email.match("^([a-zA-Z0-9.]+)\@gmail\.com$") == null) {
            emailout.innerHTML = 'Please enter a valid email address'
        }
        else {
            emailout.innerHTML = ''
        }
    }
}

// Name Validation
let validatename = () => {
    let nameout = document.getElementById('nameout')//error
    let name = document.getElementById('fname')//target
    if (name.value.trim().length == 0) {
        nameout.innerHTML = 'Please enter a valid name'
    }
    else {
        name.value = name.value.trim()
        name.value = name.value.toUpperCase()
    }
}

//Phone number Validation
let validatephone = () => {
    let phoneout = document.getElementById('phoneout')//error
    let phonenum = document.getElementById('phonenum')//target
    if (phonenum.value.trim().length == 0) {
        phoneout.innerHTML = 'Please enter a valid phone number'
    }
    else if (phonenum.value.trim().length < 10) {
        phoneout.innerHTML = 'Please enter a valid phone number'
    }
    else {
        phoneout.innerHTML = ''
    }
}

//Password Validation
let validatepassword = () => {
    let passout = document.getElementById('passout')//error
    let password = document.getElementById('password')//target
    let passicon = document.getElementsByClassName('pass-icon')[0]//target icon
    if (password.value.trim().length < 12) {
        if (password.value.trim().length == 0) {
            passout.innerHTML = 'Passwords must be at least 6 characters.'
        }
        else if (password.value.trim().length < 6) {
            passicon.style.color = 'red'
            passout.innerHTML = 'Passwords must be at least 6 characters.'
        }
        else if (password.value.trim().length >= 6) {
            passicon.style.color = 'orange'
            passout.innerHTML = ''
        }
    }
    else {
        passicon.style.color = 'green'
        passout.innerHTML = ''
    }
}


