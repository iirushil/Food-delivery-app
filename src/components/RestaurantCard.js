
const RestaurantCard = (props) =>{ 
    const {resdata} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        deliveryTime,
        costForTwo,
        cuisines
    } = resdata?.data
    
    
    return(
        <div className = "res-card">
            <img 
            className="res-logo" 
            src = {
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
             cloudinaryImageId 
        }
        alt = "res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join (",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
    
}

export default RestaurantCard;