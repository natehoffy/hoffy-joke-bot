require('dotenv').config()
const axios = require('axios');
const requestUrl = 'https://icanhazdadjoke.com/'
const data = ''
const config = {
    method:'get',
    url: requestUrl,
    headers: {
        'Accept': 'text/plain',
        'User-Agent': 'HoffyBot'
    },
    data : data
}

const jokeGetter = async () => {
    return axios(config)
        .then((res) => {
            console.log("Joke Received.")
            return JSON.stringify(res.data);
        }).catch(err => {
            console.log("ERR CODE ---> " + err.response.status);
            return {};
        })
}

module.exports = {
    jokeGetter
}
