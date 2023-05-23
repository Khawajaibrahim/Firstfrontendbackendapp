const cors = require("cors")
const express = require('express')
const doctorrouter= require('./routes/doctor')
const enrollrouter= require('./routes/enrollement')
const app = express()
const mongoose= require('mongoose')
const port = 3006
app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{

  console.log(req.path)
  console.log(req.method)
  next()
})
app.use("/api/enroll",enrollrouter)
app.use("/api/student",doctorrouter)
const connString ="mongodb+srv://khawajaibrahim:nT8HpRzHgX2WvWh3@mernhospitalmanagement.ttr39qd.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(connString).then(()=>{
  console.log("connected sucessfully")
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
.catch((error)=>{
  console.log(error)
})
// app.get('/', (req, res) => {
//   res.json('Hello World!')
// })

