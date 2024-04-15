
let emailout = document.getElementById('emailout')
let passout = document.getElementById('passout')


let validateemail = () => {
    let email = document.getElementById('email').value;
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


