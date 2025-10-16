import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";


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
    const 
    {name , cuisines , costForTwoMessage} =
     resInfo?.cards[0]?.card?.card?.info;

     const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

     return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h3>{cuisines.join(",")}</h3>
            <ul>
                {itemcards.map ( items => <li> {items.card.info.name} </li> ) }
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
            </ul>
        </div>
    );
};


export default restaurantmenu;