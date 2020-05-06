import React , {useContext} from 'react'
import AuthContext from './Auth-context'


import './Header-Auth.css'






const HeaderAuth = (props) => {
    


    const authHeader = useContext(AuthContext)
    
    return (
        <div>
        

        

        <button onClick={props.onLoadAuth}>Auth</button>
        
    
           
        </div>
    )
}

export default HeaderAuth
