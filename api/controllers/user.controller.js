const User = require('../models/user.model');

// Dica: você pode usar req.user para acessar informações do usuário que está fazendo a request.

exports.create = async (req, res) => {
    try {
        // Essa rota deve criar um novo usuário no banco de dados e criar um token
        // para ele (para gerar o token use o método definido no arquivo user.model.js).
        const user = new User(req.body);

        const token = await user.generateAuthToken();
        const dados = user.toJSON();

        // A resposta deve estar no formato { user: [dados do usuário], token: [token gerado]}
        // Pesquise qual deve ser o código de retorno HTTP quando um novo recurso foi criado no banco. 201

        res.status(201).send({
            user: dados,
            token: token
        });

    }
    catch (err) {
        console.error(err, err.message, err.stack);

        res.status(500).send({
            message: err.message || "An error occured when creating the user."
        });
    }
};

exports.login = async (req, res) => {
    try {
        // Essa rota deve, usando os métodos disponibilizados no arquivo user.model.js
        // confirmar que as credenciais digitadas estão corretas e gerar um novo token
        // JWT para o usuário.

        var user = new User();
        if (req.body.hasOwnProperty("username")) {
            user = await User.findByUsername(req.body.username, req.body.password);
        }

        else if (req.body.hasOwnProperty("email")) {
            user = await User.findByEmail(req.body.email, req.body.password);
        }

        // A resposta deve estar no formato { user: [dados do usuário], token: [token gerado]}
        // Pesquise qual deve ser o código de retorno HTTP quando a requisição foi bem sucedida. 202

        const token = await user.generateAuthToken();
        const dados = user.toJSON();

        res.status(200).send({
            user: dados,
            token: token
        });

    } catch (err) {
        console.log("catch");
        console.error(err, err.message, err.stack);

        res.status(500).send({
            message: err.message
        });
    }
};

exports.getInfo = (req, res) => {
    try {
        // Essa rota deve retornar as informações do usuário que está fazendo a requisição.

        var user = req.user;
        delete user.password;
        delete user.tokens;

        // Você pode escolher como retornar os dados, contanto que todas as informações do usuário
        // (exceto informações como senha e tokens).
        // Pesquise qual deve ser o código de retorno HTTP quando a requisição foi bem sucedida. 202

        res.status(200).send({
          user: user,
        });

    } catch (err) {
        console.error(err, err.message, err.stack);

        res.status(500).send({
            message: err.message || "An error occured when trying to retrieve user info."
        });
    }
};
