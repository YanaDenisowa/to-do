
function   checkUser(){
    // получить имеил
    // получить пароль
    // получить всех юзеров
    // пройти по каждому юзеру и проверить
    // проверить каждого юзера {
    //
    //     если у юзера имеил совпадает и тот, что ввели совпадает{
    //         то проверяем пароль
    //         если пароль сопал то
    //         потом показываем список дел
    //         прекращаем итерации
    //
    //     }
    //
    //     если у юзера несовпал имеил и не совпал пароль{
    //         регистрируем юзера
    //         выходим из цикла
    //     }
    // }
console.log(event);
    event.preventDefault();
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let emailValue = email.value;
    let passwordValue = CryptoJS.MD5(password.value).toString();
    let userExist ;

       for( let user of LocalStorageHelper.getUsers()){

        if(emailValue === user.email) {
            // console.log(emailValue);
            if (passwordValue === user.password) {
                showList();
                userExist = true;
                break;

            }else if (passwordValue !== user.password) {
                let divWrong = document.getElementById('wrong-password');
                divWrong.innerHTML = "Email or Password isn't correct.";
                divWrong.classList.add("wrong");
                userExist = true;
                break;
            }

        }
    }
    if(userExist !== true){
        registerUser();
    }


}



function showList() {
    let loginFrom = document.querySelector('.login__block');
    loginFrom.style.display = "none";

    let todoBlock = document.querySelector('.todo__block');
    todoBlock.style.display = "block";

    let addForm = document.querySelector('.form__add');
    addForm.style.display = "none";

    let addNewButton = document.getElementById("addNew");
    addNewButton.addEventListener('click', addNewTask => {
        let addForm = document.querySelector('.form__add');
        addForm.style.display = "block";
    });

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

    showList();
    console.log(LocalStorageHelper.getUsers());


}

function addTask() {
    console.log(event);
    event.preventDefault();
    let title = document.getElementById('title');
    let text = document.getElementById('txarea');

    let taskTitle = title.value;
    let taskText = text.value;
    let currentDate = new Date();
    let completeDate = document.getElementById('dateToDone');
    let completeDateValue = completeDate.value;

    console.log(completeDateValue);

    let newTask = new Task(taskTitle, taskText, currentDate, completeDateValue);

    LocalStorageHelper.addNewTask(newTask);




}
