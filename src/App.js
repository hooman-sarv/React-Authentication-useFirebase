import React, { useState } from 'react';
import './App.css'
import Todo from './Components/Todo'
import Auth from './Components/Auth'
import HeaderTodo from './Components/Header-Todo'
import HeaderAuth from './Components/Header-Auth'
import AuthContext from './Components/Auth-context'
import { useRoutes, A } from "hookrouter";

const routes = {
  "/auth": () => <Auth />,
  "/about": () => <Todo />,
};


const App = (props) => {


  const [page, setPage] = useState('auth')

  const [authStatus , setAuthStatus] = useState(false)

  const switchPage = (pageName) => {
    setPage(pageName)
  }


  const login = () =>{
    setAuthStatus(true)
  }

  return (
    < div >

    <AuthContext.Provider 
    
    value={{
      status:authStatus,
      log:login
    }}
    >
      
      <A href="/auth"><HeaderAuth
        onLoadAuth={switchPage.bind(this, 'auth')}
      /></A>
      <A href="/todo">
        <HeaderTodo
        onLoadTodos={switchPage.bind(this, 'todos')}
       />
      </A>

      {page === 'auth' ? <Auth /> : <Todo />}
    </AuthContext.Provider>
      

    </div >
  );
}

export default App;

