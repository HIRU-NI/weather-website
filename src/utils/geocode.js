const request = require('request')

const geocode = (address,  callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaGlydW5pbWFudGgiLCJhIjoiY2p2cDlxanZ2MHBjczN6bzFqamt4YzRoeSJ9.UjnrY_liLk7Vs1PGqKwnwQ'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to the services!', undefined)
        } else if(body.features.length === 0){
            callback('Cannot find the given location!', undefined)
        } else {
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }    
    })
}

module.exports = geocode
