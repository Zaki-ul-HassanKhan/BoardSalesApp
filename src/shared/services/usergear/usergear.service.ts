import { useCallback, useRef } from "react";
import { BASE_URL } from "../../../config/config";
import useHttp from "../../hooks/useHttp";
import { AddUpdateUserGearsRequest } from "../../../models/usergears/AddUpdateUserGearsRequest";

function useUserGearService(){
    const {httpService} = useHttp(BASE_URL);
const addUpdateUserGear = useCallback(
    (req: AddUpdateUserGearsRequest) => {
        console.log("INPOST")
    return httpService.post('UserGear/AddUpdateUserGear',req)
},
[httpService]
);


const {current} = useRef({
    addUpdateUserGear,
})
return current
}

export default useUserGearService;