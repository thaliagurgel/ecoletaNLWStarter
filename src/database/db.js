//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar  o objeto que vai fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto banco de dados para nossas operações

// db.serialize(() => {
//     //criar uma tabela com comandos sql 
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );

//     // `)

//     // //Inserir dados na tabela
//     // const query = `
//     //         INSERT INTO places(
//     //             image,
//     //             name,
//     //             address,
//     //             address2,
//     //             state,
//     //             city,
//     //             items
//     //         ) VALUES (?,?,?,?,?,?,?); 
//     // `
//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     //     "Papersider",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Numero 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papeis e papelão"

//     // ]
//     // function afterInsertData (err){
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log("Cadastrado com Sucesso")
//     //     console.log(this)

//     // }
//     db.run(query, values, afterInsertData)

    //Consultar dados
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Aqui estao seus registros: ")
    //     console.log(rows)

    // })

//     //Deletar dados
//     // db.run(`DELETEM FROM places WHERE id = ?`, [1], function(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log("Registro deletado")
//     // })
// })