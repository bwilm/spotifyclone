import React from 'react'
import "./Login.css"
import {loginUrl} from './spotify';

function Login() {
    return (
        <div className="login">
        {/* Spotify Logo*/}
        <img className="" src="https://i.ibb.co/bdd3phP/Spotify-Logo-CMYK-White.png" alt=""/>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        {/* Spotify Login button*/}
        </div>
    )
}

export default Login
