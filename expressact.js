const express = require('express')
const app = express()
const port = 9000

app.listen(port, function () { 
    console.log(`Example app listening on port ${port}!`)
})
        
app.get('/', function(req, res) { 
    res.send(`Contestando una petición por GET`)
})
    
app.post('/', function(req, res) { 
    res.send(`Contestando una petición por POST`)
})

app.put('/', function(req, res) { 
    res.send(`Contestando una petición por PUT`)
})

app.delete('/', function(req, res) { 
    res.send(`Contestando una petición por DELETE`)
})