import { Outlet } from "react-router-dom"

function Help() {
  return (
    <div>
        <h2>Help page</h2>
        <Outlet></Outlet>
    </div>
  )
}

export default Help