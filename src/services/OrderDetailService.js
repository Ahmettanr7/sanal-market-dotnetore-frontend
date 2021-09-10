import axios from "axios";

export default class OrderDetailService{

    getByOrderId(orderId){
        return axios.get("https://localhost:44320/api/orderdetails/getbyorderid?orderId="+orderId)
    }

    getById(id){
        return axios.get("https://localhost:44320/api/orderdetails/getbyid?id="+id)
    }

    getByUserId(userId){
        return axios.get("https://localhost:44320/api/orderdetails/getbyuserid?userId="+userId)
    }
    
    getByIsDeliveredIsTrue(){
        return axios.get("https://localhost:44320/api/orderdetails/getbyisdeliveredistrue")
    }
    
    getByIsDeliveredIsFalse(){
        return axios.get("https://localhost:44320/api/orderdetails/getbyisdeliveredisfalse")
    }
}