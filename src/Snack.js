import { useParams, useNavigate } from "react-router-dom";


function Snack(){

    const info = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>MMM I love {info.name}</h1>
            <button onClick={()=>navigate("/")}>Go Back</button>
        </div>
    );

}

export default Snack;