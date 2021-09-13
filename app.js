const express = require('express')
const app = express()
const alunos = require('./alunos.json') 
const converterMoeda = require('./rotas/converterMoeda')


app.get('/',(req,res) =>{
    res.send('Web II - Atividade 5') 
    })
  
    app.get('/alunos/todos',(req,res) =>{
        let alunos = [
            {"nome": "Bruna", "turma": "8° semestre" },
            {"nome": "Ada", "turma": "8° semestre"},
            {"nome": "Heloisa", "turma": "8° semestre"},
            {"nome": "Carla", "turma": "8° semestre"}
        ]

        res.json(alunos) 
    })


    app.get('/moeda/:valor_real', converterMoeda.converter)

    app.listen(3000,()=>{
        console.log('app executando na porta 3000')
    })
