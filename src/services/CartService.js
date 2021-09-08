import axios from "axios";

export default class CartService{

    add(cart){
        return axios.post("https://localhost:44320/api/carts/add",cart)
    }
    getAllByUserId(userId){
        return axios.get("https://localhost:44320/api/carts/getbyuserid?userId="+userId)
    }
    delete(id){
        return axios.post("https://localhost:44320/api/carts/delete?id="+id)
    }

    getTotalCartPrice(userId){
        return axios.get("https://localhost:44320/api/carts/getbyuseridtotalcartprice?userId="+userId)
    }

    getByUserIdAndCartStatusIsTrue(userId){
        return axios.get("https://localhost:44320/api/carts/getallbyuseridandcartstatusistrue?userId="+userId)
    }

    decreaseAd(userId, itemId){
        return axios.post("https://localhost:44320/api/carts/decreaseAd?itemId="+itemId+"&userId="+userId)
    }

    increaseAd(userId, itemId){
        return axios.post("https://localhost:44320/api/carts/increaseAd?itemId="+itemId+"&userId="+userId)
    }

    decreaseKg(userId, itemId){
        return axios.post("https://localhost:44320/api/carts/decreaseKg?itemId="+itemId+"&userId="+userId)
    }

    increaseKg(userId, itemId){
        return axios.post("https://localhost:44320/api/carts/increaseKg?itemId="+itemId+"&userId="+userId)
    }

}