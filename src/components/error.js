import { use } from "react";
import { useRouteError } from "react-router-dom";


const error = () => {
    const err = useRouteError()
    return(
        <div>
        <h1>oops!!</h1>
        <h2>something went wrong !!</h2>
        <h3>{err.status} :{err.statusText} </h3>
        </div>
    )
};

export default error ;