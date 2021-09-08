import axios  from "axios";

export default class AddressService{
    addAddress(address){
        return axios.post("http://localhost:8080/api/address/add",address)
    }

    getAddressByUserId(userId){
        return axios.get("http://localhost:8080/api/address/getbyuserid?userId="+userId)
    }

    getAllAddress(){
        return axios.get("http://localhost:8080/api/address/getall")
    }

    getAllCountries(){
        return axios.get("http://localhost:8080/api/countries/getall")
    }

    getCitiesByCountryId(countryId){
        return axios.get("http://localhost:8080/api/cities/getbycountry?countryId="+countryId)
    }

    getTownsByCityId(cityId){
        return axios.get("http://localhost:8080/api/towns/getbycity?cityId="+cityId)
    }

    getDistrictsByTownId(townId){
        return axios.get("http://localhost:8080/api/districts/getbytown?townId="+townId)
        
    }
}