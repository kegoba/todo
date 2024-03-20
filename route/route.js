const express = require("express")
const AppRouter = express.Router()

// database connection
const todoModel = require("../model/model.js")
// TO ADD RECORD TO DB
AppRouter.post("/api/addtodo", (req, res) =>{
    console.log(req.body)
    let data =  new todoModel(req.body)
    data.save()
    .then(todo =>{
        res.status(200).json({"record" : "Record added"})
    })
    .catch(err=>{
        res.status(400).send( err)
    })
})


// TO DISPLAY ALL THE RECORD IN THE DB
AppRouter.get("/api/displaytodo", async (req, res) =>{
     
    try {
        const data = await todoModel.find({});
        res.send(data);
      } catch (err) {
        throw err;
      }
   
})

// TO GET A SINGLE RECORD
AppRouter.get("/api/todo/:id", async (req, res) =>{

    data = await todoModel.find().then((data) => {
        console.log(data);
        if (data){
            res.send(data)
        }else{
            res.send("no data found")  
        }
       
       })
})

// TO DELETE A SINGLE TO RECORD
AppRouter.delete("/api/deletetodo/:id",  async (req, res) =>{
    async function myDelete(){
        const checkedItemId = req.body._id;
      
        const data = await Item.findByIdAndRemove(checkedItemId);
      
      };
      myDelete();
      res.send("deleted successful");
      


})





// TO UPDATE A SINGLE RECORD
AppRouter.post("/api/updates", async (req, res)=>{
    data = await todoModel.find().then((data) => {
        console.log(data);
        if (data){
            data.id = req.body.id
            data.content = req.body.content
            data.tittle =req.body.tittle
            data.update()
            .then(reco =>{
            res.status(200).json(data)  
            })
            .catch(err=>{
                res.status(400).json("unable to update record")
            })
            res.send(data)
        }else{
            res.send("no data found")  
        }
       
       })
})


module.exports = AppRouter;