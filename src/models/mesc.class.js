// Javascript não tem tipagem estática, adicionei esse Model, só pra caso evolua o backend para typescript

export class Mesc {
    constructor(
        id,
        nome,
        dataNascimento,
        identidade,
        orgaoEmissor,
        dataExpedicao,
        cpf,
        estadoCivil,
        naturalidade,
        estado,
        escolaridade,
        profissao,
        telefoneCelular,
        email,
        paróquia,
        movimentosPastorais,
        mae,
        pai,
        cep,
        endereco,
        numero,
        complemento,
        bairro,
        telefoneResidencial,
        quaisMovimentos
    ) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.mae = mae;
        this.pai = pai;
        this.identidade = identidade;
        this.orgaoEmissor = orgaoEmissor;
        this.dataExpedicao = dataExpedicao;
        this.cpf = cpf;
        this.estadoCivil = estadoCivil;
        this.cep = cep;
        this.naturalidade = naturalidade;
        this.estado = estado;
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.escolaridade = escolaridade;
        this.profissao = profissao;
        this.telefoneResidencial = telefoneResidencial;
        this.telefoneCelular = telefoneCelular;
        this.email = email;
        this.paróquia = paróquia;
        this.movimentosPastorais = movimentosPastorais;
        this.quaisMovimentos = quaisMovimentos;
    }
}
