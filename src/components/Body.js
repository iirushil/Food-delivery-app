import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
// import shimmer from "./shimmer";


const Body = () => {
    
    const [listOfRestaurants , setListOfRestraunt] = useState([]);
    const [searchText , setSearchText] = useState("")

    useEffect(() => {
         fetchData()
    } , []);

    const fetchData = async() => {
    const data = await fetch ('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json);
    setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards)
    };

    if(listOfRestaurants.length === 0){
        // return <shimmer/>
    }

    return (

        <div className = "body">
            <div className="filter"></div>
            <div className="Search">
            <input type="text" className="search-box" value = {searchText} onChange = {(e) => {
                setSearchText(e.target.value);
            }} />
            <button onClick={() =>{
             listOfRestaurants.filter
             ((res) => res.data.name.include(searchText))   
            setListOfRestraunt(filteredRestaurant);

             }}>search</button>
            </div>
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
};

 
export default Body;

