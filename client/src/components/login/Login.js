import React from 'react'
import {Button} from "@mui/material"
import {auth, provider} from "../../firebase"
import {signInWithPopup} from 'firebase/auth'
import './Login.css'
import {useStateValue} from '../contextApi/StateProvider.js';
import {actionTypes} from '../contextApi/reducer.js';

 const Login = () => {
    
    const [state, dispatch] = useStateValue();
    console.log(state);

    const signIn = ()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
           dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
           });
           console.log(result.user.displayName);
        })
        .catch((err)=>{
            alert('error in google sign IN');
        })
    }
  return (
    <div className='login'>
        <div className="login-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="logo" />
            <div className="login-text">
                <h1>Signing in to Chat</h1>
            </div>
            <Button onClick={signIn}>
                Sign in with google
            </Button>
        </div>
    </div>
  )
}
export default Login;
