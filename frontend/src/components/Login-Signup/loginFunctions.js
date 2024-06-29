import axios from 'axios'

export function logUserIn(userCredentials) {
    let apiUrl = 'https://mern-bus-app-server.vercel.app/login'
    return axios.post(apiUrl,userCredentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export function loadRoutes(){
    const authToken = sessionStorage.getItem('authToken' || '')
    let apiUrl = `https://mern-bus-app-server.vercel.app/user/profile?secret_token=${authToken}`
    return axios.get(apiUrl)
}

export function getCurrentUserDetails(authToken){
    const token =  authToken
    let apiUrl = `https://mern-bus-app-server.vercel.app/user/profile?secret_token=${token}`
    return axios.get(apiUrl)
}