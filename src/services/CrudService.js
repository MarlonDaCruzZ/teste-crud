const db = require('../db');

module.exports = {
    buscar: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * from usuario', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        
        });
    },

    unico: (id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM usuario where id = ?', [id], (error, results) => {
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome, cargo) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO usuario (nome, cargo) VALUE (?, ?)', 
                [nome, cargo], 
                (error, results) => {
                if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
                    
                }
            );
        });
    },

    editar: (id, nome, cargo) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE usuario SET nome = ?, cargo = ? WHERE id = ?', 
                [nome, cargo, id], 
                (error, results) => {
                if(error) { rejeitado(error); return; }
                    aceito(results);
                    
                }
            );
        });
    },

    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM usuario WHERE id = ?', [id], (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }
   
};