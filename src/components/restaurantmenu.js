import { useEffect , useState } from "react";


const restaurantmenu = () => {

const [resInfo , setResInfo] = useState(null);

    useEffect (() => {
        fetchMenu();
    } , [] )

    const fetchMenu = async () => {
        const data = await fetch (
            " "
        );
        const json = await data.json ();

        console.log(json);
    };
    const {name , cuisines , costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    return  resInfo === null ? (
    <Shimmer />
    ):
     (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h3>{cuisines.join(",")}</h3>
            <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
            </ul>
        </div>
    );
};


export default restaurantmenu;