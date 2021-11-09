const { body, validationResult } = require('express-validator');

  function validator () {
    [
        body('cpf').isLength({ min: 11 }).withMessage("Campo precisa ter 11 números"),
        body('nome').isLength({ min: 3 }).withMessage("Campo precisa ter pelo menos 3 caracteres"),
        body('cargo').isLength({ min: 3 }).withMessage("Campo precisa ter pelo menos 3 caracteres"),
        body('email').isEmail().withMessage("O e-mail precisa ser válido"),
        body('email').custom(value => {
            if (!value) {
                return Promise.reject('E-mail é obrigatório');
            }
            if (value == "teste@teste.com") {
                return Promise.reject('E-mail já cadastrado');
            }
            return true;
        }),
        body('senha').isLength({ min: 8 }).withMessage("Campo senha precisa ter pelo menos 8 caracteres"),
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send({ message: 'Tudo válido' });
    };
}


