import axios  from "axios";

export default class UserService{
    add(user){
        return axios.post("http://localhost:8080/api/users/add",user)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/users/getbyid?id="+id)
    }
}