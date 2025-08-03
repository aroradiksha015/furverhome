import { Link } from "react-router-dom";
import Error404 from"../../assets/Error404.png"
export default function Error(){
    return(
        <>
            <div className="d-flex justify-content-center align-items-center mt-0.5">
                <img src={Error404} alt="Error 404"/>
            </div>
            <div className="text-center">
                <Link to="/">Go to Home</Link>
            </div>
        </>
    )
}