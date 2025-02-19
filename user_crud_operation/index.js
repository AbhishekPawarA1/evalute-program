const express = require("express")
const { mongoose } = require("mongoose")
const User=require("./user.model.js")
const app = express()


app.listen(8080, () => {
    console.log("Server is started")
    connectDb()
})

app.get("/", (req, res) => {
    res.send("get is done")
    console.log("get is runnig")
})

async function connectDb() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/");
        console.log("Mongodb is connected")
    } catch (error) {
        console.log("Mongodb is not connected")
    }
}
//get

app.get("/read",async (req, res) => {
    const user = await User.find({})
    res.send(({
        messagge: "All user",
        user,
    }))
})
// post
app.post("/create", async(req, res) => {
    try {
        await User.insertMany([req.body])
        res.send("User is added")
    } catch (error) {
        console.log("User is not add")
    }
})


// delete

app.delete("/delete/:id", async(req, res) => {
    let id = req.params.id
    const user = await User.findByIdAndDelete(id)
    res.send(({
        messagge: "User is deleted",
        user,
    }))
})


//update

app.patch("/update/:id",async (res, req) => {
    let id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true })
    res.send(({
        messagge: "user is updated",
        user,
    }))
})