import { Navigate } from "react-router";
const ProductUser=({children})=>{
    const user=localStorage.getItem("auth");
    if(!user){
        <Navigate to="/login" replace={true} />
    }
    return children;
}
export default ProductUser;