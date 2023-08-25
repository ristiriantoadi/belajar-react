import { useParams } from "react-router"

function Product() {
    const {id,name} = useParams()

    return (
        <div>Product {name} and {id}</div>
    )
}

export default Product