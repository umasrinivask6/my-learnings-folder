const express = require("express")
const bodyparser = require('body-parser')

const app = express();
app.use(bodyparser.json())

const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes
  
    // Set the status code and send an error response
    res.status(500).json({ error: 'Internal Server Error' });
};


app.use(errorHandler)

  

app.get('/',(req,res,next)=>{
    try{
        const arr = []
        // const data = [{"bot":"msg1", suryeyType: "Andy" }, {"user": "msg2"}, {"bot": "msg2"}, {"bot": "msg2"}, {"bot": "msg2", "surveyType":"Agent"}]
        let data
        data.map((msg)=>{
            if(msg.surveyType && !arr.includes(msg.suryeyType)){
                arr.push(msg.suryeyType)
            }
        })
        res.send(arr.length>1? "Agent": "Andy")
    }
    catch(e){
    const error = new Error('User not found');
    error.status = 404;
    next(error);
    }
})

app.post('/hello',(req,res,next)=>{
    console.log(req.body)
    const arr = []
    const data = req.body
    // const data = [{"bot":"msg1", suryeyType: "Andy" }, {"user": "msg2"}, {"bot": "msg2"}, {"bot": "msg2"}, {"bot": "msg2", "surveyType":"Agent"}]

    data.map((msg)=>{
        if(msg.surveyType && !arr.includes(msg.suryeyType)){
            arr.push(msg.suryeyType)
        }
    })
    res.send(arr.length>1? "Agent": "Andy")
})




app.listen(3001,()=>{
    console.log('running at 3000 port')
})











var array = [
    { country: "USA", city: "New York" }, 
    { country: "India", city: "Mumbai" }, 
    { country: "USA", city: "Los Angeles" }, 
    { country: "India", city: "Hyderabad" }];
const output = {}
array.forEach((data)=>{
    if(output[data.country]){
        const cities = output[data.country]
        output[data.country] = [...cities, data.city]
    }
    else{
        output[data.country] = [data.city]
    }
})
console.log(output)







// Write a function called "deepFlatten" that takes an array of arrays and flattens it recursively so that all nested arrays are flattened and concatenated into a single array.
// Argument 

const arr = [1, [2], [[3], 4], 5]
const out = []
function deepFlatten(newArr){
    newArr.forEach((data)=>{
        if(typeof data ==='number'){
            out.push(data)
        }
        else{
            deepFlatten(data);
        }
    })
}
deepFlatten(arr)
console.log(out)













