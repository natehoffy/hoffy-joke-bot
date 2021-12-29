const webhookRouter = require("./routes/webhookRouter")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = process.env
const PORT = config.PORT

app.use(bodyParser.json())
app.listen(PORT, () => console.log(`Testing app listening on port ${PORT}`))
app.use("/", webhookRouter.router)
