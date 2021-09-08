import axios from "axios";

export default class OrderDetailService{

    getByOrderId(id){
        return axios.get("https://localhost:44320/api/orderdetails/getbyorderid?id="+id)
    }
}