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
        if (localStorage.length == 0) {
            return [];
        } else {
            if (localStorage.getItem(["tasks"]) !== null) {
                JSON.parse(localStorage.getItem("tasks"))
            } else {
                return [];
            }
        }
        return [];

    }

    static addNewTask(task) {
        let tasksFromStorage = this.getTasks();
        console.log(task);
        console.log(tasksFromStorage);

        tasksFromStorage.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    }




}


