class Negociacao {

        constructor(date, quantiade, valor) {

            this._date = date;
            this._quantidade = quantiade;
            this._valor = valor;
            Object.freeze(this);
        }

        get volume() {
            return this._quantidade * this._valor;
        }

        get data() {
            return this._data;
        }

        get quantiade() {
            return this._quantidade;
        }

        get valor() {
            return this._valor;
        }


}