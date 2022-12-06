exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'aaa',
            age: 85,
            email: 'aaaa@gmail.com'
        })
    }
}