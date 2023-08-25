import { useContext } from "react"
import { AuthContext } from "./AuthContext"

function SomeElement() {
    const user = useContext(AuthContext)
    return (
        <div>SomeElement</div>
    )
}

export default SomeElement