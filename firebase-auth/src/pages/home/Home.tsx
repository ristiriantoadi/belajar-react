import { auth } from "../../FirebaseConfig"

function Home() {
  // const currentUser = useContext(AuthContext)
  const logout = ()=>{
    return auth.signOut()
  }
  return (
    <div>
      <div>Home</div>
      <button onClick={logout}>Sign out</button>
    </div>
  )
}

export default Home