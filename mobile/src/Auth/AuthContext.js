import React, {useEffect, createContext, useContext, useState} from 'react'
import api from '../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import jwtDecode from 'jwt-decode'

const AuthContext = createContext (
    {token: null, cpf: null, loading: true,
    setUser:() => {},
    unsetUser: () => {},
})

export const AuthContextProvider= ({children}) => {
    const [cpf, setCpf] = useState();
    const [token, setToken] = useState();
    const [loading, setLoading] = useState(true);
     
    useEffect(()=>{
        AsyncStorage.getItem('token').then((token) => {
            if (token) {
                setToken(token);
                AsyncStorage.getItem('cpf').then((cpf) => {
                    setCpf(cpf);
                    setLoading(false);
                })
            }else {
                setLoading(false);
            }
        })
    })

    const setUser = async (cpf, senha) => {
        const status = await api.post("/select", {cpf, senha})
        .then(resposta => {
            if (resposta.status === 200){
                setToken(resposta.data.token);
                const decodedToken = jwtDecode (resposta.data.token);
                setCpf(decodedToken.cpf);
                AsyncStorage.setItem('cpf', decodedToken.cpf);
                AsyncStorage.setItem('token', resposta.data.token);
            } 
            return resposta.status;  
        }).catch ( error => error)
        return status; 
    }

    const unsetUser = async () => {
        AsyncStorage.removeItem('cpf')
        AsyncStorage.removeItem('token')
        setCpf(null);
        setToken(null);
    };

    const contextValue = {
        cpf, token, loading, setUser, unsetUser
    };

    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext (AuthContext);