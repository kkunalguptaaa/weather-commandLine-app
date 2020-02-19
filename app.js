const request = require("request")
const chalk = require("chalk")
const geocode=require('./utils/geocode')
const whether=require('./utils/whether')
const address=process.argv[2]
if(!address){
    console.log("Please enter an address!")
}
else{
        
    geocode(address,(error,data)=>{ //code of this function is written in utlis->geocode.js
        if(error){
            console.log(chalk.red.bold(error))
            
        }
        else{
            
            whether(data.latitude,data.longitude,(error,forecastData)=>{  //code of this function is written in utlis->whether.js   
                if(error){
                    console.log(chalk.red.bold(error))
                }
                else{
                    console.log(chalk.green.bold(data.location))
                    console.log(forecastData)
                }
            
            })
        
        }

    })

}