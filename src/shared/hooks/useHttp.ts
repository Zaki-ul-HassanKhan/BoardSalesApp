import axios, {AxiosInstance} from "axios";
import { useAuthContext } from "../../components/context/AuthContext";
import { BASE_URL } from "../../config/config";

function useHttp(baseUrl:string){
    const authstate = useAuthContext();
    if(authstate.userToken != ""){
        axios.defaults.headers.common['Authorization'] = `Bearer ${authstate.userToken}`
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
    try{
        const response = await instance.get(apiActionUrl);
        return response;
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
            apiActionUrl = BASE_URL + apiActionUrl;
            const response = await instance.post(apiActionUrl, payload);
            return response;
        }
        catch(error) {
            console.error(error);
        }
}

export default useHttp;