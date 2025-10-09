import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resList from "../utils/mockdata";

const Body = () => {
    
    const [listOfRestaurants , setListOfRestraunt] = useState(resList);
      
    return (

        <div className = "body">
            <div className="filter"></div>
            <button className="filter-btn" onClick = {() => {
               const filtererdList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
               ); 
               setListOfRestraunt(filtererdList);
            }}
            >Top Rated Restaurant</button>
        
            <div className="res-container">
               {listOfRestaurants.map((restaurant) => (
                <RestaurantCard key = {restaurant.data.id} resdata = {restaurant} /> 
                 ))}
            </div>
        </div>
    )
}
 
export default Body;

