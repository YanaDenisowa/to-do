class LocalStorageHelper {
    static getUsers() {
        return (localStorage.length) ? JSON.parse(localStorage.getItem("users")) : [];
    }

    static  addNewUser(user) {
        let usersFromStorage = this.getUsers();
        usersFromStorage.push(user);
        localStorage.setItem("users", JSON.stringify(usersFromStorage));


    }

    static checkUserExist (user) {
        // let usersFromStorage = this.getUsers();
        // if (localStorage.getItem('email') !== null &&
        //     localStorage.getItem(user['password']) !== null) {
        //
        //     console.log(`Email address and password exists`);
        // } else {
        //     console.log(`Email address not found --- This is a new user`);
        // }

        // if (localStorage.getItem("userEmail") === null) {
        //     console.log("No such email");
        // }

    }


}


