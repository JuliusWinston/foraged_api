const express = require("express")
const cors = require("cors")

const {StreakCounter} = require('./src/Controller')

const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express())
app.use(express.urlencoded({extended: true}))

app.post("/api/streak-counter", (req, res) => {
  StreakCounter(req, res)
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
