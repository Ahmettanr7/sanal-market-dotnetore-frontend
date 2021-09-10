import axios  from "axios";

export default class OrderService{
    
add(order){
    return axios.post("https://localhost:44320/api/orders/add",order)
}

wasDelivered(id){
    return axios.post("https://localhost:44320/api/orders/wasdelivered?id="+id)
}
}