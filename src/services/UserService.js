import axios  from "axios";

export default class UserService{
    add(user){
        return axios.post("https://localhost:44320/api/users/add",user)
    }

    getById(id){
        return axios.get("https://localhost:44320/api/users/getbyid?id="+id)
    }

    getByEmail(email){
        return axios.get("https://localhost:44320/api/users/getbyemail?email="+email)
    }
}