import axios, {AxiosInstance} from "axios";
import { useAuthContext } from "../../components/context/AuthContext";
import { BASE_URL } from "../../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useHttp(baseUrl:string){
    const authstate = useAuthContext();
    if(authstate.user != null){
        if(authstate.user.token != ""){
        axios.defaults.headers.common['Authorization'] = `Bearer ${authstate.user.token}`
        }
    }
    else{
        AsyncStorage.setItem('UserToken', "");
        AsyncStorage.setItem('UserId', "");
    }

    const instance = axios.create({ baseURL : baseUrl});

    return{
        httpService: {
            get : (apiActionUrl: string) =>
                httpGet(instance, apiActionUrl),
            post: (apiActionUrl: string, payload: object) =>
                httpPost(instance, apiActionUrl, payload)
        },
    };

}

async function httpGet(
    instance : AxiosInstance, 
    apiActionUrl : string
)
{
    apiActionUrl = BASE_URL + apiActionUrl;
    console.log("I AM IN GETT");
    console.log(apiActionUrl);
    try{
        const response = await instance.get(apiActionUrl);
        return response.data;
    }
    catch(error) {
        console.error(error);
    }
}

async function httpPost(
    instance : AxiosInstance, 
    apiActionUrl : string,
    payload: object) {
        try{
            console.log("I AM IN POST");
            apiActionUrl = BASE_URL + apiActionUrl;
            console.log(apiActionUrl);
            const response = await instance.post(apiActionUrl, payload);
            return response.data;
        }
        catch(error) {
            console.error(error);
        }
}

export default useHttp;