const request=require('request')
const chalk = require("chalk")
const whether=(latitude,longitude,callback)=>{
    const url="https://api.darksky.net/forecast/86ce9d8c7b422a493a0fc10f1e2f359c/"+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"?units=si"
    request({url:url,json:true},function(error,response){  
        if(error)
        {
            callback("unable to connect to whether service!",undefined)
           
        }
        else if(response.body.error)
        {
            callback("Unable to find the location!",undefined)
           
        }
        else
        {
            const yellow=chalk.yellow.bold
            const orange=chalk.bold.keyword('orange')
            const blue=chalk.blue.bold
            const data= yellow(response.body.daily.data[0].summary)+".\n" + orange("It is currently "+response.body.currently.temperature+" degree Celsius out.\n")+blue("There is "+response.body.daily.data[0].precipProbability+"% percent chance of rain.")
            callback(undefined,data)
            
        }
    })

}
module.exports=whether