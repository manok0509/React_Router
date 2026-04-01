import React, { useContext } from 'react'
import { UserContext } from './components/ContextUser'
import { Navigate, Outlet } from 'react-router-dom'
function Protectedroute() {
    const user = useContext(UserContext)

    return user == true ? <Outlet /> : <Navigate to='/login' />
}


export default Protectedroute
