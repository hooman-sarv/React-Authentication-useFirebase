import React, { useContext, useState } from 'react'
import AuthContext from './Auth-context'
import './Auth.css'


const Auth = (props) => {

    const auth = useContext(AuthContext)
    return (
        <div>
            <button onClick={auth.log}>Login !</button>
        </div>
    )
}

export default Auth
