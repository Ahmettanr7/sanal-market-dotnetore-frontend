import axios from "axios";

export default class CartService{

    add(cart){
        return axios.post("http://localhost:8080/api/carts/add",cart)
    }
    getAllByUserId(userId){
        return axios.get("http://localhost:8080/api/carts/getbyuserid?userId="+userId)
    }
    delete(id){
        return axios.post("http://localhost:8080/api/carts/delete?id="+id)
    }

    getTotalCartPrice(userId){
        return axios.get("http://localhost:8080/api/carts/getTotalCartPrice?userId="+userId)
    }

    getByUserIdAndCartStatusIsTrue(userId){
        return axios.get("http://localhost:8080/api/carts/getbyuseridandcartstatusistrue?userId="+userId)
    }

    decreaseAd(userId, itemId){
        return axios.post("http://localhost:8080/api/carts/decreaseAd?itemId="+itemId+"&userId="+userId)
    }

    increaseAd(userId, itemId){
        return axios.post("http://localhost:8080/api/carts/increaseAd?itemId="+itemId+"&userId="+userId)
    }

    decreaseKg(userId, itemId){
        return axios.post("http://localhost:8080/api/carts/decreaseKg?itemId="+itemId+"&userId="+userId)
    }

    increaseKg(userId, itemId){
        return axios.post("http://localhost:8080/api/carts/increaseKg?itemId="+itemId+"&userId="+userId)
    }

}