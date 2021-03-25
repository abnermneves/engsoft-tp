describe("Suite com alguns testes de unidade", function() {
    
    describe("Cadastro de usuário", function() {
        it("Testar se usuário não preenchido retorna nulo", function() {
            expect().nothing();
            const user = require('../src/scripts/cadastrarUsuario.js');
            expect(user.estaNulo).toBeUndefined();
        });

        it("Testar se cadastrar usuário vazio não é bem sucedido", function() {
            const user = require('../src/scripts/cadastrarUsuario.js');
            expect(user.cadastrarUsuario).toBeUndefined();
        });

        it("Testar se senhas de um usuário vazio não são validadas", function() {
            const user = require('../src/scripts/cadastrarUsuario.js');
            expect(user.validaSenhas).toBeUndefined();
        });

        it("Dados JSON são indefinidos", function() {
            const user = require('../src/scripts/cadastrarUsuario.js');
            expect(user.getDadosJSON).toBeUndefined();
        });

    });
});