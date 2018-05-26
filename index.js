const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const ipaddress = req.ip
    const language = req.headers['accept-language'].slice(0, 5)
    const software = req.headers['user-agent'].split('(')[1].split(')')[0]
    res.status(200).json({
        ipaddress,
        language,
        software
    })
})

app.listen(process.env.PORT || 8080, () => console.log(`Server listening on ${process.env.PORT || 8080}`))