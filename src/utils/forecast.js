const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f8099dae9f0f9a83a43ce7c0b8c034d9/'+ latitude +',' + longitude

    request({ url, json:true}, (error, {body}) => {
            if (error) {
                callback('Unable to connect to weather services!', undefined)
            } else if(body.error) {
                callback(body.error, undefined)
            }
            else {
                callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability * 100 + ' % chance of rain. Humidity is ' + body.currently.humidity)
            }
    })
}

module.exports = forecast