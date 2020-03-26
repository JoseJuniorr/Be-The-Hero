const connection = require('../database/connection')
const crypto = require('crypto')



module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')

        return response.json(ongs)
    },




    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body

        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })


        return response.json({ id })
    }
}






























/*
Métodos HTTP:
GET
POST
PUT
DELETE

Tipos de parâmetros:

Query Params: parametros nomeados enviados na rota após ?
Route params: parametros utilizados para identificar recursos
Request Body: Corpo da requisição utilizado para criar ou alterar recursos

BD SQLite
Driver: select, insert...
Query Builder: table('users')... knexJs

Entidades
*ONG
*Caso Incident

Funcionalidades
*Login
*Logout
*Cadastro de ONG
*Cadastar novos casos
*Deletar casos
*Listar casos especificos
Listar todos os casos
entrar em contato

*
*/