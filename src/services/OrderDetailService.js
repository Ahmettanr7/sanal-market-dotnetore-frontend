import axios from "axios";

export default class OrderDetailService{

    getByOrderId(id){
        return axios.get("http://localhost:8080/api/orderdetails/getbyorderid?id="+id)
    }
}