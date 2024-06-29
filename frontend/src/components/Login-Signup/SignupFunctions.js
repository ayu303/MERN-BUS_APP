import axios from 'axios'

export function registerUser(newUserDetails){
    let apiUrl = 'https://mern-bus-app-server.vercel.app/register'
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}