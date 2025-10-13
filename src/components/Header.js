import {useState} from "react";

const Header = () => {

    const [btnNameReact , setBtnNameReact] = useState("login");
  

    return(
        <div className = "header">
            <div className = "logo-container">
                <img className="logo"
                src = "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6ab0bb223140421.67f3e2f76de70.jpg" />
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Home</li>
                    <button className="login" onClick={() => 
                    btnNameReact === "login" ? setBtnNameReact ("logout") : setBtnNameReact('login')  } >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;