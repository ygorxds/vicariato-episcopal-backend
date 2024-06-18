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
            console.log("BATEU AQUI EM!", req.body, results[0][0] )
            res.json(results[0][0]); 
        } catch (error) {
            res.status(500).send('Erro interno do servidor');
        }
    },
    async distribuicaoDeGenero(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spCountGenderDistribution(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
                [startDate, endDate, paroqId, capelId].filter(param => param !== null)
            );

            res.json(results[0][0]); 
        } catch (error) {
            console.error('Erro ao chamar a stored procedure:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },
    async distribuicaoDeGeneroPorIdade(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spCountMescsByAgeAndGender(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
                [startDate, endDate, paroqId, capelId].filter(param => param !== null)
            );

            res.json(results[0][0]); 
        } catch (error) {
            console.error('Erro ao chamar a stored procedure:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },
    async distribuicaoDeEducacao(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spCountMescsByEducation(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
                [startDate, endDate, paroqId, capelId].filter(param => param !== null)
            );

            res.json(results[0][0]); 
        } catch (error) {
            console.error('Erro ao chamar a stored procedure:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },
    async distribuicaoDeEscolaridadePorMovimento(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spEducationAndMovementParticipation(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
                [startDate, endDate, paroqId, capelId].filter(param => param !== null)
            );

            res.json(results[0][0]); 
        } catch (error) {
            console.error('Erro ao chamar a stored procedure:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },
    async distribuicaoDeEstadoCivil(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spCountMescsByMaritalStatus(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
                [startDate, endDate, paroqId, capelId].filter(param => param !== null)
            );

            res.json(results[0][0]); 
        } catch (error) {
            console.error('Erro ao chamar a stored procedure:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },
    async distribuicaoDeMescEmOutrosMovimentos(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spCountMescsByOtherMovements(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
                [startDate, endDate, paroqId, capelId].filter(param => param !== null)
            );

            res.json(results[0][0]); 
        } catch (error) {
            console.error('Erro ao chamar a stored procedure:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },
    async distribuicaoDeMescEmOutrosMovimentosFazOuNao(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spCountParticipationInOtherMovements(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
                [startDate, endDate, paroqId, capelId].filter(param => param !== null)
            );

            res.json(results[0][0]); 
        } catch (error) {
            console.error('Erro ao chamar a stored procedure:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },
    async distribuicaoDeMescAoLongoDoTempo(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spCountMescsRegistrationOverTime(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
                [startDate, endDate, paroqId, capelId].filter(param => param !== null)
            );

            res.json(results[0][0]); 
        } catch (error) {
            console.error('Erro ao chamar a stored procedure:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },
    async distribuicaoDeMescPorEstado(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spCountMescsByState(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
                [startDate, endDate, paroqId, capelId].filter(param => param !== null)
            );

            res.json(results[0][0]); 
        } catch (error) {
            console.error('Erro ao chamar a stored procedure:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },
    async distribuicaoDeMescPorMunicipio(req, res) {
        let { startDate, endDate, paroquia: paroqId, capela: capelId } = req.body;

        startDate = startDate || null;
        endDate = endDate || null;
        paroqId = paroqId || null;
        capelId = capelId || null;

        try {
            const results = await knex.raw(`
                CALL spCountMescsByMunicipality(${startDate ? '?' : 'NULL'}, ${endDate ? '?' : 'NULL'}, ${paroqId ? '?' : 'NULL'}, ${capelId ? '?' : 'NULL'})`,
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
