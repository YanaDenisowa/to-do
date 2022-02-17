// take data from inputs
function checkUser() {
    event.preventDefault();
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let userEmail = email.value;
    let userPassword = CryptoJS.MD5(password.value).toString();
// console.log(userEmail);


   LocalStorageHelper.getUsers().forEach((element) => {
        console.log(element);
        if (userEmail === element.email) {
            if(userPassword === element.password){
                let loginFrom = document.querySelector('.login__block');
                loginFrom.style.display = "none";
                let todoBlock = document.querySelector('.todo__block');
                todoBlock.style.display = "block";


            }
        }

    })



}



function registerUser(){
    event.preventDefault();

    let password = document.getElementById('password');
    let email = document.getElementById('email');

    let userEmail = email.value;
    let userPassword = CryptoJS.MD5(password.value).toString();


    //Add newUser-example Class of user
    let newUser = new User(userEmail, userPassword);

    let newLocalStorageHelper = new LocalStorageHelper();

    //add new user to local storage
    LocalStorageHelper.addNewUser(newUser);

    console.log(LocalStorageHelper.getUsers());

    LocalStorageHelper.checkUserExist(newUser);


}

// function clearInputs(){
//     let password = document.getElementById('password');
//     let email = document.getElementById('email');
//     let userEmail = email.value;
//     let userPassword = CryptoJS.MD5(password.value).toString();
//     userEmail = "";
//     userPassword= "";
//     console.log('text clear');
// }