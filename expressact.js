const express = require('express')
const app = express()
const port = 3000

app.listen(port, function () { 
    console.log(`Example app listening on port ${port}!`)
})
        
app.get('/', function(req, res) { 
    console.log(`Contestando una petición por GET`)
})
    
app.get('/', function(req, res) { 
    console.log(`Contestando una petición por GET`)
})
    
app.post('/', function(req, res) { 
    console.log(`Contestando una petición por POST`)
})

app.put('/', function(req, res) { 
    console.log(`Contestando una petición por PUT`)
})

app.delete('/', function(req, res) { 
    console.log(`Contestando una petición por DELETE`)
})