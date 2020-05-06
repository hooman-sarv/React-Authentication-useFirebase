import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios'
import './Todo.css'

const Todo = (props) => {

    const [todoName,setTodoName] = useState('')

    //const [todoList,setTodoList] = useState([])

    const todoListReducer = (state,action) =>{
        switch (action.type) {
            case 'ADD':
                return state.concat(action.payload)
            case 'SET':
                return action.payload
            case 'DELETE':
                return state.filter((todo) => todo.id !== action.payload)
            
            default:
                return state;
        }
    }
    
    const [todoList , dispatch] = useReducer(todoListReducer,[])
    
    
    useEffect(() => {

        axios.get(
            'https://react-20d84.firebaseio.com/todos.json'
            )
            .then(result => {
                console.log(result);
                const todos=[]
                const todoData = result.data
                for (const item in todoData) {
                    todos.push({
                        id:item,
                        name: todoData[item].name
                    })
                }
                //setTodoList(todos)
               dispatch({type:'SET', payload:todos})
            })
            .catch (err => {
                console.log(err);
                
            })
    },[])

    const handleChange = (e) => {
        setTodoName(e.target.value)
    }

    const todoAddHandler = () => {
           // setTodoList(todoList.concat(todoName))

        axios.post(
            'https://react-20d84.firebaseio.com/todos.json',
            {
            name : todoName 
        }) 
        .then(res => {
            console.log(res);
            const todoItem = {id:res.data.name , name:todoName}
            //setTodoList(todoList.concat(todoItem))
            dispatch({type:'ADD', payload:todoItem})
        })
        .catch(err => {
            console.log(err);
            
        })
    }

    const todoDeleteHandler = (todoId) =>{
        axios.delete(`https://react-20d84.firebaseio.com/todos/${todoId}.json`)
        .then(res => {
            dispatch({type:'DELETE' , payload : todoId})
        })

        .catch(err => {
            console.log(err);
            
        })
    }

    return (
        <div>
            <input
                value={todoName}
                onChange={handleChange}
                placeholder="Todo"
            />

            <button
                onClick={todoAddHandler}
            >Add</button>

            <ul>
                {todoList.map( todo => (
                    <li key={todo}>{todo.name}<button onClick={todoDeleteHandler.bind(this, todo.id)}>Delete</button></li>
                    
                ))}
            </ul>
        </div>
    );
}

export default Todo;
