import axios from "axios"

export default(url='https://api.chucknorris.io/jokes/random') => {
    return axios.create({
        baseURL: url,
    })
}