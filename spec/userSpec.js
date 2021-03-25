const mongoose = require('mongoose')
const server = require('../index')

describe("Testes de unidade", function() {
    const user = require('../src/scripts/cadastrarUsuario.js');

    describe("Testes - cadastro de usuário", function() {
        it("Usuário não preenchido deve ser nulo", function() {
            expect().nothing();
            expect(user.estaNulo).toBeUndefined();
        });

        it("Cadastrar usuário vazio não deve ser bem sucedido", function() {
            const user = require('../src/scripts/cadastrarUsuario.js');
            expect(user.cadastrarUsuario).toBeUndefined();
        });

    });
    
    describe("Testes - cadastro de plano", function() {
        it("", function() {

        });

        it("", function() {

        });
    });
});