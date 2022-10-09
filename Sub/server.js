const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const email = req.body.email
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
            }
        ]
    }
    var jsonData = JSON.stringify(data)
    const url = "https://us10.api.mailchimp.com/3.0/lists/c04d9fa166"
    const options = {
        method: "POST",
        auth: "osama:adc298ce8d9d95e8c9ad5044a2468081-us10"
    }

    const request = https.request(url, options, function (response) {
        response.on("data", function (data) {
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()
})

app.listen(8004, function () {
    console.log("Server is running on port 8004")
})