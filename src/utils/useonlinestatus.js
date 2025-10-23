import { useEffect } from "react";

const useOnlineStatus = () => {
    const [OnlineStatus , setOnlineStatus] = 

    useEffect(() => { 

        window.addEventListener("offline" , () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online" , () => {
            setOnlineStatus(true);
        });
    } , []);

    return useOnlineStatus;
}


export default useOnlineStatus;