const createKnex = require('../context');

const knex = createKnex();

const ParoquiaController = {
    async distribuicaoDeIdade(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spCountAgeGroupsBy_date(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
                [startDate, endDate, paroqId, capelId].filter(param => param !== null)
            );

            res.json(results[0][0]); 
        } catch (error) {
            console.error('Erro ao chamar a stored procedure:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },

};

module.exports = ParoquiaController;
