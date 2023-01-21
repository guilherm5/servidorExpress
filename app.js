//nesse modulo vemos como usar express para abrir e manipular servidores http. 
//res.send enviamos uma mensagem para o servidor(pode ser arquivo html, css etc..), como ja vimos no go, é facil de se usar e manipular como  gin.

const http = require("express")
const server = require("./server")
const app = http()

function sobre(req, res){
    res.send("seja bem-vindo a pagina sobre")
}

function home(req, res){
    res.send("seja bem-vindo a pagina home")
}

app.get("/sobre", sobre)
app.get("/home", home)

var serverTest = require("./server")

app.listen(8080, serverTest)
