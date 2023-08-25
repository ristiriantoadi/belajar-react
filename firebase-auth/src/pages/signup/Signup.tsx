import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { redirect } from "react-router";
import { auth } from "../../FirebaseConfig";

function Signup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            return redirect("/home")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            // console.log(error)
            // console.log("error code",error.code)
            // console.log("error message",error.message)
            alert(error.message)
        });
    } 
    return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
      <label>Password</label>
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
      <button type="submit">Register</button>    
    </form>
  )
}

export default Signup