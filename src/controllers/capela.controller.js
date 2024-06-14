const createKnex = require('../context');

const knex = createKnex();

const CapelaController = {
    async listar(req, res) {
        try {
            let capelas = await knex('capela').select('*');
            return res.json(capelas);
        } catch (error) {
            console.error('Erro ao listar capelas:', error);
            return res.status(500).json({ message: 'Erro ao listar capelas.' });
        }
    },

    async buscarPorId(req, res) {
        const { id } = req.params;
        try {
            let capela = await knex('capela').where({ id }).first();
            if (!capela) return res.status(404).json({ message: 'Capela não encontrada.' });
            return res.json(capela);
        } catch (error) {
            console.error('Erro ao buscar capela:', error);
            return res.status(500).json({ message: 'Erro ao buscar capela.' });
        }
    },

    async inserir(req, res) {
        const capela = req.body;
        try {
            let result = await knex('capela').insert(capela);
            if (!result) return res.status(400).json({ message: 'Capela não inserida.' });
            return res.status(200).json({ message: 'Capela inserida.' });
        } catch (error) {
            console.error('Erro ao inserir capela:', error);
            return res.status(500).json({ message: 'Erro ao inserir capela.' });
        }
    },

    async atualizar(req, res) {
        const { id } = req.params;
        const capela = req.body;
        try {
            let result = await knex('capela').where({ id }).update(capela);
            if (!result) return res.status(400).json({ message: 'Capela não atualizada.' });
            return res.status(200).json({ message: 'Capela atualizada.' });
        } catch (error) {
            console.error('Erro ao atualizar capela:', error);
            return res.status(500).json({ message: 'Erro ao atualizar capela.' });
        }
    },

    async deletar(req, res) {
        const { id } = req.params;
        try {
            let result = await knex('capela').where({ id }).del();
            if (!result) return res.status(400).json({ message: 'Capela não deletada.' });
            return res.status(200).json({ message: 'Capela deletada.' });
        } catch (error) {
            console.error('Erro ao deletar capela:', error);
            return res.status(500).json({ message: 'Erro ao deletar capela.' });
        }
    }
};

module.exports = CapelaController;
