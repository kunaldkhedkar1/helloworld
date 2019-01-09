var {Data ,Log} = require('../models/model')
let handler =  function(req, h){
    var payload = JSON.parse(req.payload);
    var input = payload.input;
     
    return Data.findAll({
        where:{
            input
        },
        attributes:['input','output']
    }).then((data)=>{
        let filterredData = data.filter((item)=>{
            return item.input === input;
        })
        Log.insertOrUpdate({
            time: new Date(),
            loginfo: JSON.stringify(filterredData)
        })
        console.log(JSON.stringify(filterredData));
        return JSON.stringify(filterredData);
    })
    
}
module.exports = handler;