export default class UserModel{
    constructor(id,name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static allUsers(){
        return users;
    }

    static signUp(userData){
        const {name,email,password} = userData;
        const newUser = new UserModel(
            users.length+1,
            name,
            email,
            password
        );
        users.push(newUser);
        return newUser;
    }

    static signIn(email,password){
        return users.find((user)=>user.email==email && user.password==password);
    }
}






var users = [
    new UserModel(
        1,
        'Abhishek',
        'abc@gmail.com',
        '1234'
    )
]