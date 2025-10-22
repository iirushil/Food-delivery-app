import { useEffect } from "react";

const userestaurantmenu = (resId) => {

const [resInfo , setResInfo] = ueState(null);

    useEffect(() => {
       fetchData();
    } , []);


    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);

        const json = await data.json();
    };

    return resInfo;
};

export default userestaurantmenu;

