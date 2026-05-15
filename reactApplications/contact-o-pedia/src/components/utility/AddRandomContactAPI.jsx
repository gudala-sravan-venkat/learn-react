import axios from 'axios'
export const getRandomUser = async() => {

    // WITH FETCH
    // const baseURL = new URL('https://randomuser.me/api/')
    // const response = await fetch(baseURL)
    // if(response.ok) {
    //     const responseJson = await response.json()
    //     return responseJson
    // } else{
    //     throw new Error(`HTTP error status ${response.status}. Response: ${response.json()}`)
    // }

    // WITH AXIOS (PREFERRED)
    const baseURL = new URL('https://randomuser.me/api/')
    const response = await axios.get(baseURL)
    return response.data;
}