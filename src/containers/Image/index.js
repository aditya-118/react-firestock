import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

import { Card } from "../../components"
import { Context } from "../../context";

const Image = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log("🚀 ~ file: index.js:10 ~ Image ~ navigate:", navigate)
    const { state }= useContext(Context);
    const item = state.items.find( item => (item.id === location.state.id))
    useEffect(() => {
        if(!item){
            navigate("/*",{ replace: true});
        }   
    },[item])
    return(
        <div className="image">
            <div className="container text-center mt-5">
                <button className="btn btn-link" onClick={() => navigate(-1)}>Back</button>
                <div className="d-flex justify-content-center mb-5">
                    <Card file={item ? item : {}} />
                </div>
            </div>
        </div>
    )
}
export default Image;