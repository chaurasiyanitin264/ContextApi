import { useContext, useState } from "react";
import { myLoginContext } from "./LoginContext";

const AuthApp=()=>{
    const [username,setUsername]=useState("");
    const {login}=useContext(myLoginContext);
    return(
        <>
          Enter Type:<input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
          <button onClick={()=>{login(username)}}>Login</button>
        </>
    )
}
export default AuthApp;