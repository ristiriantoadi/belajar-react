import { Link, NavLink, Outlet } from 'react-router-dom'

function Navbar() {
    return (
      <nav>
          <h1>Navbar</h1>
          <Link to="/">Home</Link>
          <NavLink to="/about">About</NavLink>
          <Outlet></Outlet>
      </nav>
    )
  }

export default Navbar