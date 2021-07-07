import React,{useState} from 'react'
// import {useHistory} from 'react-router-dom';
import history from '../history';
const Login = () => {
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const handleSubmit=()=>{
history.push("/home");


}

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br></br>
                <input type="text" placeholder="Enter password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br></br>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default Login;