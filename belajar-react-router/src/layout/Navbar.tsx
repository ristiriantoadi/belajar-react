import { Link, NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <h1>Navbar</h1>
        <div id="container">
          <div id='sidebar'>
            <Link to="/">Home</Link>
            <NavLink to="/about">About</NavLink>
          </div>
          <div id='content'>
            <Outlet></Outlet>
          </div>
        </div>
    </nav>
  )
}

export default Navbar