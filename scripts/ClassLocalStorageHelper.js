class LocalStorageHelper {
    static getUsers() {
        return (localStorage.length) ? JSON.parse(localStorage.getItem("users")) : [];
    }

    static  addNewUser(user) {
        let usersFromStorage = this.getUsers();
        usersFromStorage.push(user);
        localStorage.setItem("users", JSON.stringify(usersFromStorage));


    }

    static getTasks(){
        return (localStorage.length) ? JSON.parse(localStorage.getItem("tasks")) : [];
    }

    static addNewTask(task) {
        let tasksFromStorage = this.getTasks();
        tasksFromStorage.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    }




}


