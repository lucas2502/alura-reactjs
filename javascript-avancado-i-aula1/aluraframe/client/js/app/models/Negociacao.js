class Negociacao {

        constructor(data, quantiade, valor) {

            this._data = new Date(data.getTime());
            this._quantidade = quantiade;
            this._valor = valor;
            Object.freeze(this);
        }

        get volume() {
            return this._quantidade * this._valor;
        }

        get data() {
            return new Date(this._data.getTime());
        }

        get quantiade() {
            return this._quantidade;
        }

        get valor() {
            return this._valor;
        }

        get volume() {
           let volume = 0;
            return volume = this._quantidade * this._valor;
        }


}

class Conta {

    constructor(titular, conta) {

        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0;
    }

    deposita(valor) {
        console.log('Valor depositado: ' + valor);
        this._saldo+=valor; 
    }

    get saldo(){
        return this._saldo
    }

    get titular() {
        return this._titular;
    }

    get conta() {
        return this._conta;
    }
}