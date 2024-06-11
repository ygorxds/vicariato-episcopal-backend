export class Usuario {
    constructor(
        id,
        nome,
        genero,
        email,
        telefone,
        dataNascimento,
        senha,
        statusConta,
        created_at,
        updated_at
    ) {
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.email = email;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.senha = senha;
        this.statusConta = statusConta;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
