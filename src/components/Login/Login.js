import { Button } from '@material-ui/core'
import { auth, provider } from "../../firebase"
import React from 'react'
import "./Login.css"

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch((error) => alert(error.message));

    }

    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pC2G9IJ1xOOzLdYoP3pnZgHaHZ%26pid%3DApi&f=1" alt="" />
            </div>
            <Button variant="contained" color="primary" onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
