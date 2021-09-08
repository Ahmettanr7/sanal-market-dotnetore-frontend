import axios from "axios";

export default class CategoryService{

    add(category){
        return axios.post("https://localhost:44320/api/categories/add",category)
    }

    delete(id){
        return axios.post("https://localhost:44320/api/categories/delete?id="+id)
    }

    getAll(){
        return axios.get("https://localhost:44320/api/categories/getall")
    }

    getById(id){
        return axios.get("https://localhost:44320/api/categories/getbyid?id="+id)
    }
}