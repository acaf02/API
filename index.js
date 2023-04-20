const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//banco de dados falso
var BD = {
    cliente:[
        {
            id: 1,
            nome: "Ana",
            sexo: "F",
            data_nasc: '31/10/2002',
            idade:20,
            cidade: "Alegrete"
        },
        {
            id: 2,
            nome: "Ismael",
            sexo: "M",
            data_nasc: '27/05/1996',
            idade:26,
            cidade: "Alegrete"
        },
        {
            id: 3,
            nome: "Liége",
            sexo: "F",
            data_nasc: '25/07/1995',
            idade:27,
            cidade: "Canoas"
        }
    ],
    cidades: [
        {
            id:1,
            nome: "Alegrete",
            estado: "RS"
        },
        {
            id:2,
            nome: "Canoas",
            estado: "RS"
        },
        {
            id:3,
            nome: "São Paulo",
            estado: "SP"
        }
    ]
}


app.get("/",(req,res) => {
    res.status(200).json({BD});


})


//cadastrar cliente 
app.post("/cliente", (req, res) => {
    try{

    var {nome,sexo,data_nasc,idade,cidade} = req.body;

    if(!nome || !sexo || !data_nasc || !idade || !cidade){
        res.status(400).send('Todos os campos são obrigatórios!!')
    }

    BD.cliente.push({
        id: 4,
        nome,
        sexo,
        data_nasc,
        idade,
        cidade

    })
        res.status(201).send("Cliente cadastrado com sucesso!!");
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
   
});

//cadastrar cidade

app.post("/cidade", (req, res) => {
    try {

    var {nome, estado} = req.body;

    if(!nome || !estado){
        res.status(400).send('Todos os campos são obrigatórios!!');
    }

    BD.cidades.push({
        id: 4,
        nome,
        estado
    })
        res.status(201).send("Cidade cadastrada com sucesso!!");

    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})

//remover cliente
app.delete("/cliente/:id", (req,res) => {
    try {

        if(isNaN(req.params.id)){
            res.sendStatus(400)
        }else {
            var id = parseInt(req.params.id);
            var index = BD.cliente.findIndex(c => c.id == id);

            if(index == -1) {
                res.sendStatus(404)
            } else {
                BD.cliente.splice(index,1);
                res.sendStatus(204);
            } 
        } 
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})

//editar cliente
app.put("/cliente/:id",(req, res) => {
    try{

        if(isNaN(req.params.id)){
            res.sendStatus(400);
        }else{
            
            var id = parseInt(req.params.id);

            var client = BD.cliente.find(c => c.id == id);

            if(client != undefined){

                var {nome,sexo,data_nasc,idade,cidade} = req.body;

                
                if(nome != undefined){
                    client.nome = nome;
                }

                if(sexo != undefined){
                    client.sexo = sexo;
                }

                if(data_nasc != undefined){
                    client.data_nasc = data_nasc;
                }

                if(idade != undefined){
                    client.idade = idade;
                }

                if(cidade != undefined){
                    client.cidade = cidade;
                }
                
                res.sendStatus(200);

            }else{
                res.sendStatus(404);
            }
        }
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }    
});



//consultar cidade pelo nome

app.get("/cidade/:nome", (req,res) => {
    try{
        var nome = req.params.nome;

        var city = BD.cidades.find(c => c.nome == nome);

        if(city != undefined) {
            res.statusCode = 200;
            res.json(city);
        } else {

            res.sendStatus(404);  
        }
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
}
})

//consultar cidade pelo estado
app.get("/cidade/estado/:estado", (req,res) => {
    try{
        var estado = req.params.estado;

        var city = BD.cidades.find(c => c.estado == estado);

        if(city != undefined) {
            res.statusCode = 200;
            res.json(city);
        } else {

            res.sendStatus(404);
        }
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})

//consultar cliente pelo nome

app.get("/cliente/:nome", (req,res) => {
    try{
        var nome = req.params.nome;

        var client = BD.cliente.find(c => c.nome == nome);

        if(client != undefined) {
            res.statusCode = 200;
            res.json(client);
        } else {

            res.sendStatus(404);
        }
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
}
})

//consultar cliente pelo id

app.get("/cliente/id/:id", (req,res) => {
    try{
        if(isNaN(req.params.id)){
            res.sendStatus(400)
        }else {
            var id = parseInt(req.params.id);

            var client = BD.cliente.find(c => c.id == id);

            if(client != undefined) {
                res.statusCode = 200;
                res.json(client);
            } else {

                res.sendStatus(404);
            }
        }
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})

app.listen(6060, () => {
    console.log("API RODANDO!");
});