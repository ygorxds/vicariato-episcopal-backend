const createKnex = require('../context')

const knex = createKnex();

const MescController = {
    async buscar(req, res) {
        let mescs = await knex('mescs').select('*');
        return res.json(mescs);
    },

    async buscarPorId(req, res) {
        const { id } = req.params;
        console.log(id)
        try {
          let mesc = await knex('mescs').where({ id }).first();
          if (!mesc) return res.status(404).json({ message: 'MESC não encontrado.' });
          return res.json(mesc);
        } catch (error) {
          console.error('Erro ao buscar MESC:', error);
          return res.status(500).json({ message: 'Erro ao buscar MESC.' });
        }
    },
   
    async inserirMesc(req, res) {
        const mesc = req.body;
        try{
        let result = await knex('mescs').insert(mesc);
        if(!result) return res.status(400).json({msg:'Mesc does not inserted'});
        return res.status(200).json({msg:'Mesc inserted'});
} catch {
    return res.status(500).json({msg:'Mesc not inserted'})
}

    },
    async editarMesc(req, res) {
        const { id } = req.params;
        const mesc = req.body;
        let result = await knex('mescs').where({ id }).update(mesc);
        if (!result) return res.status(400).json({msg: 'Mesc does not updated'});
        return res.status(200).json({msg: 'Mesc updated'});
    },

    async deletarMesc(req, res) {
        const { id } = req.params;
        console.log(id)
        let result = await knex('mescs').where({ id }).del();
        if (!result) return res.status(400).json({msg: 'Mesc does not deleted'});
        return res.status(200).json({msg: 'Mesc deleted'});
    }
}

module.exports = MescController;