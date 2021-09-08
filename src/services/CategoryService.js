import axios from "axios";

export default class CategoryService{

    add(category){
        return axios.post("http://localhost:8080/api/categories/add",category)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/categories/delete?id="+id)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/categories/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/categories/getbyid?id="+id)
    }
}