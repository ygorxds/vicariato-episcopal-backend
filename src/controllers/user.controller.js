const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createKnex = require('../context');
const knex = createKnex();

const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    async register(req, res) {
        const { nome, 
                genero, 
                email, 
                telefone, 
                dataNascimento, 
                senha, 
                statusConta } = req.body;

        const hashedPassword = bcrypt.hashSync(senha, 8);

        try {
            await knex('usuarios').insert({
                nome,
                genero,
                email,
                telefone,
                dataNascimento,
                senha: hashedPassword,
                statusConta
            });
            console.log()
            res.status(201).send('User registered successfully!');
        } catch (error) {
            res.status(500).send('Error on the server.');
        }
    },

    async login(req, res) {
        const { email, senha } = req.body;

        try {
            const user = await knex('usuarios').where({ email }).first();

            if (!user) {
                return res.status(404).send('No user found.');
            }

            const passwordIsValid = bcrypt.compareSync(senha, user.senha);
            if (!passwordIsValid) {
                return res.status(401).send({ auth: false, token: null });
            }

            const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: 86400 });
            res.status(200).send({ auth: true, token });
        } catch (error) {
            res.status(500).send('Error on the server.');
        }
    },

    //função pra testar o token de assinatura unica JWT.
    async me(req, res) {
        try {
            const user = await knex('usuarios').where({ id: req.userId }).first();

            if (!user) {
                return res.status(404).send('No user found.');
            }

            res.status(200).send(user);
        } catch (error) {
            res.status(500).send('Error on the server.');
        }
    }
};
