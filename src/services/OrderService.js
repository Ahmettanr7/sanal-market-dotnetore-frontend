import axios  from "axios";

export default class OrderService{

add(order){
    return axios.post("https://localhost:44320/api/orders/add",order)
}

wasDelivered(id){
    return axios.post("https://localhost:44320/api/orders/wasdelivered?id="+id)
}

getByUserId(userId){
    return axios.get("https://localhost:44320/api/orders/getbyuserid?userId="+userId)
}

getByIsDeliveredIsTrue(){
    return axios.get("https://localhost:44320/api/orders/getbyisdeliveredistrue")
}

getByIsDeliveredIsFalse(){
    return axios.get("https://localhost:44320/api/orders/getbyisdeliveredisfalse")
}

}