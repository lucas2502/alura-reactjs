class Negociacao {

        constructor(date, quantiade, valor) {

            this.date = date;
            this.quantidade = quantiade;
            this.valor = valor;
        }

        getVolume(){
            return this._quantidade * this._valor;
        }

        getData() {
            return this._data;
        }

        getQuantiade() {
            return this._quantidade;
        }

        getValor() {
            return this._valor;
        }


}