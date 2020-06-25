
var request = require('request');
request('https://api.openweathermap.org/data/2.5/weather?q=Hawaii&appid=4212fea829beeda7f89e4c4a2670c0ae', function(error, response, body){
    if (!error && response.statusCode == 200) {
        var parseData = JSON.parse(body)
        console.log(parseData["sys"]);
    }
})
