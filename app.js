const webhookRouter = require("./routes/webhookRouter")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = process.env
const PORT = config.PORT

app.use(express.static("public"))
app.use(bodyParser.json())
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});
app.post("/", webhookRouter.router)
app.listen(PORT || 4040, () => console.log(`Testing app listening on port ${PORT}`))
