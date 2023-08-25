import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../AuthContext"

function PrivateRoutes() {
    const {currentUser} = useContext(AuthContext)
    console.log("current user",currentUser)
    return (
        <div>
            {currentUser ? <Outlet/> : <Navigate to="/login"></Navigate>}
            <p>{currentUser?.email}</p>
        </div>
    )
}

export default PrivateRoutes