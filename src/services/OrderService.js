import axios  from "axios";

export default class OrderService{

add(order){
    return axios.post("http://localhost:8080/api/orders/add",order)
}

wasDelivered(id){
    return axios.post("http://localhost:8080/api/orders/wasdelivered?id="+id)
}

getByUserId(userId){
    return axios.get("http://localhost:8080/api/orders/getbyuserid?userId="+userId)
}

getByIsDeliveredIsTrue(){
    return axios.get("http://localhost:8080/api/orders/getbyisdeliveredistrue")
}

getByIsDeliveredIsFalse(){
    return axios.get("http://localhost:8080/api/orders/getbyisdeliveredisfalse")
}

}