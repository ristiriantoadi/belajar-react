import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../FirebaseConfig";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()

  const handleSubmit = (e:any)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      console.log("login success")
      navigate("/")
    })
    .catch((e)=>{console.log("login fail",e)})
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <label>Email</label>
      <input type="text" value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}></input>
      <label>Password</label>
      <input type="password" value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}></input>
      <button type="submit">Login</button>    
    </form>
  )
}

export default Login