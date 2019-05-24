class NegociacaoController {

    constructor(){
        
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adicionar(event) {
        event.preventDefault();         
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao() {

        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

    }

    _limpaFormulario() {

        this._inputData.value = '',
        this._inputQuantidade.value = 1,
        this._inputValor.value = 0.0,

        this._inputData.focus();
    }
}