const CrudService = require('../services/CrudService');

module.exports = {
    buscar: async (req, res) => {
        let json = {error:'', result:[]};

        let usuario = await CrudService.buscar();
        for(let i in usuario){
            json.result.push({
                codigo: usuario[i].id,
                nome: usuario[i].nome,
                cargo: usuario[i].cargo
            });
        } 
        res.json(json);
    },

    unico: async (req, res) => {
        let json = {error:'', result:{}};
        
        let id = req.params.id;
        let usuario = await CrudService.unico(id);

        if(usuario){
            json.result = usuario;
        }
        res.json(json);
    },

    inserir: async (req, res) => {
        let json = {error:'', result:{}};
        
        let nome = req.body.nome;
        let cargo = req.body.cargo;

        if(nome && cargo){
            let usuarioId = await CrudService.inserir(nome, cargo);
            json.result = {
                id: usuarioId,
                nome,
                cargo
            };
        }else{
            json.error = 'Não foram enviados';
        }
        res.json(json);
    },

    editar: async (req, res) => {
        let json = {error:'', result:{}};
        
        let id = req.params.id;
        let nome = req.body.nome;
        let cargo = req.body.cargo;

        if(id && nome && cargo){
            await CrudService.editar(id, nome, cargo);
            json.result = {
                id,
                nome,
                cargo
            };
        }else{
            json.error = 'Não foram Alterados os dados';
        }
        res.json(json);
    },

    excluir: async (req, res) => {
        let json = {error:'', result:{}};

        await CrudService.excluir(req.params.id);

        res.json(json);
    }
}