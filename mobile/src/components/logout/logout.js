import React, { useEffect } from 'react'
import {useAuth} from '../../Auth/AuthContext'

function Logout(){
    const { unsetUser } = useAuth();

    useEffect(()=>{
        unsetUser()
    }) 
    return <></>
}
export default Logout;