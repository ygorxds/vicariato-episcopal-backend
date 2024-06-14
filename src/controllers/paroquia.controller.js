const createKnex = require('../context');

const knex = createKnex();

const ParoquiaController = {
    async listar(req, res) {
        try {
            let paroquias = await knex('paroquia').select('*');
            return res.json(paroquias);
        } catch (error) {
            console.error('Erro ao listar paroquias:', error);
            return res.status(500).json({ message: 'Erro ao listar paroquias.' });
        }
    },

    async buscarPorId(req, res) {
        const { id } = req.params;
        try {
            let paroquia = await knex('paroquia').where({ id }).first();
            if (!paroquia) return res.status(404).json({ message: 'Paróquia não encontrada.' });
            return res.json(paroquia);
        } catch (error) {
            console.error('Erro ao buscar paróquia:', error);
            return res.status(500).json({ message: 'Erro ao buscar paróquia.' });
        }
    },

    async inserir(req, res) {
        const paroquia = req.body;
        try {
            let result = await knex('paroquia').insert(paroquia);
            if (!result) return res.status(400).json({ message: 'Paróquia não inserida.' });
            return res.status(200).json({ message: 'Paróquia inserida.' });
        } catch (error) {
            console.error('Erro ao inserir paróquia:', error);
            return res.status(500).json({ message: 'Erro ao inserir paróquia.' });
        }
    },

    async atualizar(req, res) {
        const { id } = req.params;
        const paroquia = req.body;
        try {
            let result = await knex('paroquia').where({ id }).update(paroquia);
            if (!result) return res.status(400).json({ message: 'Paróquia não atualizada.' });
            return res.status(200).json({ message: 'Paróquia atualizada.' });
        } catch (error) {
            console.error('Erro ao atualizar paróquia:', error);
            return res.status(500).json({ message: 'Erro ao atualizar paróquia.' });
        }
    },

    async deletar(req, res) {
        const { id } = req.params;
        try {
            let result = await knex('paroquia').where({ id }).del();
            if (!result) return res.status(400).json({ message: 'Paróquia não deletada.' });
            return res.status(200).json({ message: 'Paróquia deletada.' });
        } catch (error) {
            console.error('Erro ao deletar paróquia:', error);
            return res.status(500).json({ message: 'Erro ao deletar paróquia.' });
        }
    }
};

module.exports = ParoquiaController;
