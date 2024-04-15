// Coupen Code
setTimeout(loadCoupen,5000)
function loadCoupen(){
    document.getElementById('coupen-code').style.visibility='visible';
    document.getElementById('main').style.opacity='0.5';
}
function closeCoupen(){
    document.getElementById('coupen-code').style.visibility='hidden';
    document.getElementById('loginpage').style.visibility='hidden';
    document.getElementById('signuppage').style.visibility='hidden';
    document.getElementById('main').style.opacity='1';
}


//Added to cart 
let addBtn = document.getElementsByClassName("add-btn")
let showMsg = document.getElementsByClassName("add-cart")
let cartDiv = document.getElementById('cart-div')
let cart = 0
for (const key in addBtn) {
    console.log(key)
    addBtn[key].onclick = ()=>{
        cart++
        cartDiv.innerHTML=cart
        showMsg[key].style.visibility='visible'
        setTimeout(()=>{
            showMsg[key].style.visibility='hidden'
        },2000)
    }
}

// Location with Weather
let weathertag = document.getElementById("weather-details");

function getweather(){
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition)
}
else{
    console.error("Geolocation is not supported by this browser")
}
}

function showPosition(data){
    // console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    // console.log(lat, long)
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    
    fetch(url,{method:'GET'})
       .then(response => response.json())
       .then((data) => {
           let cityName = data.city.name;
           let cityTemp = data.list[0].temp.day;
           weathertag.innerHTML=`${cityName}  ${cityTemp}°C`
       })
}

// Dark and light mode
function darkMode() {
    document.body.classList.toggle("body-dark-mode");
    let dark = document.getElementById("dark-mode-icon");
    let darkText=document.getElementsByClassName("darkMode");
    let darkNav = document.getElementsByClassName("navbar");
    let darkSection = document.getElementsByClassName("section-div");
    let darkHeading=document.getElementsByTagName("h4");

    if (dark.style.color === "white") {
        dark.style.color = "yellow";
        darkText[0].innerHTML="Dark Mode";
        darkNav[0].style.backgroundColor = "darkblue";
        darkSection[0].style.backgroundColor = "midnightblue";
        for (const dhead of darkHeading) {
            dhead.style.color="black"
        }
    }
    else {
        dark.style.color = "white";
        darkText[0].innerHTML="Normal Mode";
        darkNav[0].style.backgroundColor = "black";
        darkSection[0].style.backgroundColor = "dimgray";
        for (const dhead of darkHeading) {
            dhead.style.color="white"
        }
    }
}

//Star Rating
let mainDiv = document.getElementsByClassName('star-icon')
let star = document.getElementsByClassName('rating')
let arr1 = []
let arr2 = []
for (const key in mainDiv) {
    arr1.push(mainDiv[key].children);
}
arr1.map((data)=>{
    for (const key in data) {
        data[key].onclick = ()=>{
        arr2=[]
        for (const dkey in data) {
            arr2.push(data[dkey])
        }
        for(let i = 0; i<=arr2.indexOf(data[key]); i++){
            arr2[i].style.color = 'gold'
            for(let j=arr2.indexOf(data[key])+1; j<arr2.length-3; j++) {
            arr2[j].style.color = 'lightgray'
        }
        }
       }
    }
})

//Login account pop up
let showLogin = ()=>{
    document.getElementById('loginpage').style.visibility='visible';
    document.getElementById('main').style.opacity='0.8';
}
let gotoSignup = () => {
    document.getElementById('signuppage').style.visibility='visible';
    document.getElementById('loginpage').style.visibility='hidden';
}
let gotoLogin = () => {
    document.getElementById('loginpage').style.visibility='visible';
    document.getElementById('signuppage').style.visibility='hidden';
}

//Login validation
let validateemail = () => {
    let emailout = document.getElementById('emailout')
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

// Sign up validation
// Email Validation
let validateemails = () => {
    let emailout = document.getElementById('emailouts')//error
    let email = document.getElementById('emails').value; //target
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
    let passout = document.getElementById('passouts')//error
    let password = document.getElementById('passwords')//target
    let passicon = document.getElementsByClassName('pass-icon')[0]//target icon
    if (password.value.trim().length < 10) {
        if (password.value.trim().length == 0) {
            passicon.style.color = 'black'
            passout.innerHTML = 'Password must be at least 6 characters.'
        }
        else if (password.value.trim().length < 6) {
            passicon.style.color = 'red'
            passout.innerHTML = 'Password must be at least 6 characters.'
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


