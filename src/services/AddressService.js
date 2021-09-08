import axios  from "axios";

export default class AddressService{
    addAddress(address){
        return axios.post("https://localhost:44320/api/addresses/add",address)                
    }

    getAddressByUserId(userId){
        return axios.get("https://localhost:44320/api/addresses/getallbyuserid?userId="+userId)
    }

    getAllAddress(){
        return axios.get("https://localhost:44320/api/addresses/getall")
    }

    getAllCountries(){
        return axios.get("https://localhost:44320/api/countries/getall")
    }

    getCitiesByCountryId(countryId){
        return axios.get("https://localhost:44320/api/cities/getbycountryid?countryId="+countryId)
    }

    getTownsByCityId(cityId){
        return axios.get("https://localhost:44320/api/towns/getbycityid?cityId="+cityId)
    }

    getDistrictsByTownId(townId){
        return axios.get("https://localhost:44320/api/districts/getbytownid?townId="+townId)
        
    }
}