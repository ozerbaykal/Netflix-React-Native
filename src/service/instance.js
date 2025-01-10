import axios from "axios";
import { API_KEY, token } from "../utils/constanst";
import { BASEURL } from "./url";


const Client = axios.create()

Client.defaults.baseURL = BASEURL;
Client.defaults.params = {
    api_key: API_KEY,
    language: "en-EN",


}
Client.defaults.headers = {

    accept: 'application/json',
    'Content-Type ': 'application/json',
    Authorization: `Bearer ${token}`

}
export default Client;
