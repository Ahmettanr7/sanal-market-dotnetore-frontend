import axios from "axios";

export default class ItemService{
    add(item){
        return axios.post("https://localhost:44320/api/items/add",item)
    }

    delete(id){
        return axios.post("https://localhost:44320/api/items/delete?id="+id)
    }

    getById(id){
        return axios.get("https://localhost:44320/api/items/getbyid?id="+id)
    }

    imageUpload(image){
        return axios.post("https://localhost:44320/api/images/add",image)
        // return axios.post(`https://localhost:44320/api/images/add?itemId=${itemId}`,multipartFile)
    }

    getByCategory(cat1Id,pageNo,pageSize){
        return axios.get("https://localhost:44320/api/items/getcategory1id?cat1Id="+cat1Id+"&pageNo="+pageNo+"&pageSize="+pageSize)
    }

    getAllCategory1Id(cat1Id){
        return axios.get("https://localhost:44320/api/items/getallcategory1Id?cat1Id="+cat1Id)
    }

    getByItemName(itemName){
        return axios.get("https://localhost:44320/api/items/getbyitemname?itemName="+itemName)
    }

    getByItemNamePageable(itemName,pageNo,pageSize){
        return axios.get("https://localhost:44320/api/items/getbyitemnamepageable?itemName="+itemName+"&pageNo="+pageNo+"&pageSize="+pageSize)
}
}