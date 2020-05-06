import React , {useContext} from 'react'
import AuthContext from './Auth-context'
import './Header-Todo.css'

const HeaderTodo = (props) => {
    
    const authHeaderTodo = useContext(AuthContext)
    
    return (
        <div>
        {authHeaderTodo.status 
        ? 
        (<button onClick={props.onLoadTodos} >Todo List</button>)
        :
        null
        }
       
        
    
           
        </div>
    )
}

export default HeaderTodo
