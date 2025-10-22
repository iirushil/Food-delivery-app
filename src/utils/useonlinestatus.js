import { useEffect } from "react";

const useOnlineStatus = () => {
    const [OnlineStatus , setOnlineStatus] = 

    useEffect(() => { 

        window.addEventListener("online" , () => {

        })

    } , []);

    return useOnlineStatus;
}


export default useOnlineStatus;