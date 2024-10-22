

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('dados.db')

function PreencherTabela(nome,sobrenome) {
    db.serialize(()=>{
        db.run(`CREATE TABLE IF NOT EXISTS usuarios 
            id INTEGER PRIMARY KEY AUTOINCREMENT ,
            nome TEXT ,
            sobrenome TEXT
        )`);

        const stmt = db.prepare("INSERT INTO ususarios (nome,sobrenome) VALUES (?,?)")
        stmt.run(nome,sobrenome)
        stmt.finalize()
    })
}

PreencherTabela("Isaque", "Estolano") 

