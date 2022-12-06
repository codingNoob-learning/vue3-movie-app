const axios = require('axios')

exports.handler = async function (event) {
    console.log(event)
    const payload = JSON.parse(event.body)      // 객체화
    const { title, type, year, page, id } = payload
    const OMDB_API_KEY = '7035c60c'
    const url = id
     ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
     : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

    try {
        const { data } = await axios.get(url)
        if (data.Error) {
            return {
                statusCode: 400,
                // body는 문자만 가능, 객체나 배열은 stringify화 시킴
                body: data.Error
            }
        }
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        return {
            statusCode: error.response.status,
            body: error.message
        }
    }
}