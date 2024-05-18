import { useState } from 'react';
import {useNavigate } from "react-router-dom";
import api from "../../lib/apiConfig"


export function auth() {
    const navigate = useNavigate()
    const [accessToken, setAccessToken] = useState('');
    const [authError, setAuthError] = useState(false)

    const loginUser = async (login) => {
        try {
            const response = await api.post('login', login);
            const accessToken = response.data.accessToken
            console.log('Login Berhasil', response.data)
            response.data.role == 'admin' ? navigate('../dashboard/admin'):navigate('/home') 
        } catch (error) {
            console.error('Login Error:', error);
            setAuthError(true)
        }
    };

    return {
        accessToken,
        loginUser,
        authError
    };
}