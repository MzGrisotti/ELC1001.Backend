const Wardrobe = require('../models/wardrobe.model');

// Dica: você pode usar req.user para acessar informações do usuário que está fazendo a request.

exports.getAll = async (req, res) => {
    try {
        // Essa rota deve retornar todos os guarda-roupas *que pertencem ao usuário*.
        // Não é necessário popular as referências para as roupas (garments).

        // Você pode escolher como retornar os dados, contanto que todas as informações
        // dos guarda-roupas estejam presentes.

        // Pesquise qual deve ser o código de retorno HTTP quando a requisição foi bem sucedida.
    }
    catch(err) {
        console.error(err, err.message, err.stack);

        return res.status(500).send({
            message: "Error retrieving wardrobes"
        });
    }
};

exports.getById = async (req, res) => {
    try {
        // Essa rota deve retornar todas as informações de um guarda-roupas *se ele pertencer ao usuário*.
        // Nesse caso, você deve popular as referências para as roupas (garments).

        // Você pode escolher como retornar os dados, contanto que todas as informações
        // do guarda-roupas estejam presentes.

        // Pesquise qual deve ser o código de retorno HTTP quando a requisição foi bem sucedida.
    }
    catch(err) {
        console.error(err, err.message, err.stack);

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Wardrobe not found with id " + req.params.wardrobeId
            });
        }

        return res.status(500).send({
            message: "Error retrieving wardrobe with id " + req.params.wardrobeId
        });
    }
};

exports.create = async (req, res) => {
    try {
        // Essa rota deve criar um novo guarda-roupas no banco de dados e atribuir ele
        // ao usuário que está fazendo a requisição.

        // Você pode escolher se quer retornar as informações do guarda-roupas criado.
        // Pesquise qual deve ser o código de retorno HTTP quando um novo recurso foi criado no banco.
    }
    catch(err) {
        console.error(err, err.message, err.stack);

        res.status(500).send({
            message: "An error occured when creating the wardrobe."
        });
    }
};

exports.addGarment = async (req, res) => {
    try {
        // Essa rota deve adicionar uma peça de roupas (recebida através do parâmetro garmentId) 
        // ao guarda-roupas do usuário (recebido através do parâmetro wardrobeId).
        
        // Atenção: verifique se o guarda-roupas informado (wardrobeId) realmente
        //          pertence ao usuário que está fazendo a requisição.

        // Pesquise qual deve ser o código de retorno HTTP quando a requisição foi bem sucedida.
    }
    catch(err) {
        console.error(err, err.message, err.stack);

        res.status(500).send({
            message: "An error occured when creating the wardrobe."
        });
    }
};