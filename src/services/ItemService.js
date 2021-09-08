import axios from "axios";

export default class ItemService{
    add(item){
        return axios.post("http://localhost:8080/api/items/add",item)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/items/delete?id="+id)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/items/getbyid?id="+id)
    }

    imageUpload(itemId,multipartFile){
        return axios.post(`http://localhost:8080/cloudinary/upload?itemId=${itemId}`,multipartFile)
    }

    getByCategory(cat1Id,pageNo,pageSize){
        return axios.get("http://localhost:8080/api/items/getbycategory?cat1Id="+cat1Id+"&pageNo="+pageNo+"&pageSize="+pageSize)
    }

    getAllCategory1Id(cat1Id){
        return axios.get("http://localhost:8080/api/items/getallcategory1Id?cat1Id="+cat1Id)
    }

    getByItemName(itemName){
        return axios.get("http://localhost:8080/api/items/getbyitemname?itemName="+itemName)
    }

    getByItemNamePageable(itemName,pageNo,pageSize){
        return axios.get("http://localhost:8080/api/items/getbyitemnamepageable?itemName="+itemName+"&pageNo="+pageNo+"&pageSize="+pageSize)
}
}