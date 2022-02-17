// take data from inputs


function registerUser(){
    event.preventDefault();

let password = document.getElementById('password');
let email = document.getElementById('email');

let userEmail = email.value;
let userPassword = CryptoJS.MD5(password.value).toString();

//Add newUser-example Class of user
let newUser = new User(userEmail, userPassword);


console.log(userEmail, userPassword);
console.log(password, email);
console.log(newUser);

}